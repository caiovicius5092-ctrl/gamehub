function errorHandler(err, req, res, next) {
    if (err){
        console.error(err.stack);
        return res.status(500).json({ message: err.message});
    }
    next();
}