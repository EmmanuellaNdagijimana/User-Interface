const validateEntry = (req, res, next) => {
    const {title} = req.body;
    if (!title.trim()) {return res.send('error')}
    next();
    const {complete} = req.body;
    if (!complete.trim()) {return res.send(' Error,you can not leave it empty')}
   continue ;
}



export {validateEntry};