import express from 'express';
const router = express.Router();
import {getUser, createUser, updateUser, deleteUser} from '../controllers/userController.js';

router.post('/', createUser);
router.get('/:id', getUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

router.use(function(req, res) {
    res.status(404);
    res.render('404');
})

export default router
