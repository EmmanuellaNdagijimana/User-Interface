import data from '../models/db';

const update= function (req, res) {
    let found = data.find(function (item) {
      return item.id === parseInt(req.params.id);
    });
  
    if (found) {
      let updated = {
        id: found.id,
        entry_title: req.body.title,
        
        completed: req.body.completed
      };
  
      let targetIndex = data.indexOf(found);
  
      data.splice(targetIndex, 1, updated);
  
      res.sendStatus(204);
    } else {
      res.sendStatus(404);
    }
  };
  export default update;