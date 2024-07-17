import express from 'express';
const router = express.Router();
import {getRole, createRole, updateRole, deleteRole} from '../controllers/roleController.js';

router.post('/', createRole);
router.get('/:id', getRole);
router.put('/:id', updateRole);
router.delete('/:id', deleteRole);

router.use(function(req, res) {
    res.status(404);
    res.render('404');
})

export default router
