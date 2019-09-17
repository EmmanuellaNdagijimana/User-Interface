import data from '../models/db';
router.delete('/:id', function (req, res) {
    let found = data.find(function (item) {
      return item.id === parseInt(req.params.id);
    });
    if (found) {
      let targetIndex = data.indexOf(found);
  
      data.splice(targetIndex, 1);
    }
  
    res.sendStatus(204);
  });
  
  module.exports = router;
  