import express from 'express';
import addall from '../controllers/addall'
import addspecific from '../controllers/addspecific'
import addnew from '../controllers/addnew'
import update from '../controllers/update'
const router = express.Router();



router.get('/api/v1/db', addall);
router.get('/api/v1/db/:id', addspecific);
router.post('/api/v1/db/', addnew);
router.put('/api/v1/db/id', update);

export default router;
