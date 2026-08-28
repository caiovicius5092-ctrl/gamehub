const crypto = require("crypto");
const jwt = require("jsonwebtoken");

const users = [];
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

  if (users.some((user) => user.email === normalizedEmail)) {
    return null;
  }

  const { hash, salt } = hashPassword(password);
  const user = {
    id: users.length + 1,
    name: name.trim(),
    email: normalizedEmail,
    passwordHash: hash,
    salt
  };

  users.push(user);
  return publicUser(user);
}

function login(email, password) {
  const user = users.find((item) => item.email === email.trim().toLowerCase());

  if (!user || !isValidPassword(password, user)) {
    return null;
  }

  const token = jwt.sign({ sub: user.id, email: user.email }, jwtSecret, { expiresIn: "1h" });
  return { token, user: publicUser(user) };
}

function getUserById(id) {
  const user = users.find((item) => item.id === id);
  return user ? publicUser(user) : null;
}

module.exports = { register, login, getUserById };
