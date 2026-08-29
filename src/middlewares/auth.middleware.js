const jwt = require("jsonwebtoken");

const jwtSecret = process.env.JWT_SECRET || "dev-secret-change-me";

function authenticate(req, res, next) {
  const authorization = req.headers.authorization;
  const token = authorization && authorization.startsWith("Bearer ")
    ? authorization.slice(7)
    : null;

  if (!token) {
    return res.status(401).json({ message: "Token não informado" });
  }

  try {
    req.user = jwt.verify(token, jwtSecret);
    return next();
  } catch {
    return res.status(401).json({ message: "Token inválido ou expirado" });
  }
}

module.exports = authenticate;
