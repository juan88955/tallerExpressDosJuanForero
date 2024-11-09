const notFoundHandler = (req, res, next) => {
    res.status(404).json({
        success: false,
        message: `La petición con el método ${req.method} en la ruta ${req.url} no fue encontrada- Not Found`
    });
}

export default notFoundHandler;