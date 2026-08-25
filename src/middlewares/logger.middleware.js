function logger(req, res, next) {
  const inicio = Date.now();

  res.on("finish", () => {
    const dataAtual = new Date().toISOString();
    const duracao = Date.now() - inicio;
    const log = `${req.method} ${req.originalUrl} - status: ${res.statusCode} - tempo: ${duracao}ms`;
    console.log(log);
  });

  next();
}

module.exports = logger;
