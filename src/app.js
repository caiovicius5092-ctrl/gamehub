const express = require("express");
const cors = require("cors");
const app = express();
const gameRoutes = require("./routes/game.routes");
const authRoutes = require("./routes/auth.routes");
const logger = require("./middlewares/logger.middleware");
const errorHandler = require("./middlewares/error.middleware");

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));

app.use(express.json());
app.use(logger);

app.use("/jogos", gameRoutes);
app.use("/auth", authRoutes);

app.use(errorHandler);

module.exports = app;
