const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const database = require("../config/database");

const jwtSecret = process.env.JWT_SECRET || "dev-secret-change-me";

function hashPassword(password, salt = crypto.randomBytes(16).toString("hex")) {
  const hash = crypto.scryptSync(password, salt, 64).toString("hex");
  return { hash, salt };
}

function isValidPassword(password, user) {
  const { hash } = hashPassword(password, user.salt);
  return crypto.timingSafeEqual(Buffer.from(hash, "hex"), Buffer.from(user.passwordHash, "hex"));
}

function publicUser(user) {
  return { id: user.id, name: user.name, email: user.email };
}

function register({ name, email, password }) {
  const normalizedEmail = email.trim().toLowerCase();

  const { hash, salt } = hashPassword(password);

  return new Promise((resolve, reject) => {
    database.run(
      `INSERT INTO users (name, email, password_hash, salt) VALUES (?, ?, ?, ?)`,
      [name.trim(), normalizedEmail, hash, salt],
      function (error) {
        if (error) {
          if (error.code === "SQLITE_CONSTRAINT") {
            resolve(null);
            return;
          }

          reject(error);
          return;
        }

        resolve({ id: this.lastID, name: name.trim(), email: normalizedEmail });
      }
    );
  });
}

function login(email, password) {
  return new Promise((resolve, reject) => {
    database.get(
      "SELECT id, name, email, password_hash AS passwordHash, salt FROM users WHERE email = ?",
      [email.trim().toLowerCase()],
      (error, user) => {
        if (error) {
          reject(error);
          return;
        }

        if (!user || !isValidPassword(password, user)) {
          resolve(null);
          return;
        }

        const token = jwt.sign({ sub: user.id, email: user.email }, jwtSecret, { expiresIn: "1h" });
        resolve({ token, user: publicUser(user) });
      }
    );
  });
}

function getUserById(id) {
  return new Promise((resolve, reject) => {
    database.get(
      "SELECT id, name, email FROM users WHERE id = ?",
      [id],
      (error, user) => {
        if (error) {
          reject(error);
          return;
        }

        resolve(user || null);
      }
    );
  });
}

module.exports = { register, login, getUserById };
