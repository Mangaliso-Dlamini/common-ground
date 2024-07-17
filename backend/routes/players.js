import express from 'express';
const router = express.Router();
import {getPlayer, createPlayer, updatePlayer, deletePlayer} from '../controllers/playerController.js';

router.post('/', createPlayer);
router.get('/:id', getPlayer);
router.put('/:id', updatePlayer);
router.delete('/:id', deletePlayer);

router.use(function(req, res) {
    res.status(404);
    res.render('404');
})

export default router
