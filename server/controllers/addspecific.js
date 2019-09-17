import db from '../models/db';
const addspecific = (req,res) => {
    let found = db.find(function(item){
        return item.id === parseInt (req.param.id);
    }
    );
    if(found){
        res.status(200).json(found);

    } else{
        res.sendstatus(404);
    }
};
export default addspecific;