const validateEntry = (req, res, next) => {
    const {title} = req.body;
    if (!title.trim()) {return res.send('error')}
    next();
}

export {validateEntry};