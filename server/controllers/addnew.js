import data from '../models/db';

const addnew= function (req, res) {
    let itemIds = data.map(item => item.id);
    
  
    let newId = itemIds.length > 0 ? Math.max.apply(Math, itemIds) + 1 : 1;
    
  
    let newItem = {
      id: newId,
     entry_title: req.body.title,
      completed: false,
      createdOn: new Date()
    };
    data.push(newItem);

  res.status(201).json(newItem);
};
export default addnew;