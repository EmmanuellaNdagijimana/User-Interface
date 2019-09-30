import express from 'express';
import all from '../controllers/all'
import specific from '../controllers/specific'
import addnew from '../controllers/addnew'
import update from '../controllers/update'
import {validateEntry} from '../middlewares/validator'
const router = express.Router();



router.get('/api/v1/db', all);
router.get('/api/v1/db/:id',specific);
router.post('/api/v1/db/', validateEntry, addnew);
router.put('/api/v1/db/:id',validateEntry, update);
router.delete('/api/v1/db/:id',);

export default router;
