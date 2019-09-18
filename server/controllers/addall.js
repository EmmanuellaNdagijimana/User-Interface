import data from '../models/db';
const addall = (req,res) => {
    res.status(200).json({
        status:200,
        data: data,
    });
}
export default addall;