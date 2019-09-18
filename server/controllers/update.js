import data from '../models/db';

const edit = (req, res) => {
  let found = data.find(item => item.id === parseInt(req.params.id))
  if (found) {
    found.title = req.body.title
      

    return res.status(200).json({
      status: 200,
      message: "updated",
      data: {
        id:found.id,
        title: found.title,
        completed: found.completed,
        createdon: found.createdOn
      }
    })
  } else {
    res.sendStatus(404).json;
  }
};
export default edit;