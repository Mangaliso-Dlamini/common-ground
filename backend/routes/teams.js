import express from 'express';
const router = express.Router();
import {getTeam, createTeam, updateTeam, deleteTeam} from '../controllers/teamController.js';

router.post('/', createTeam);
router.get('/:id', getTeam);
router.put('/:id', updateTeam);
router.delete('/:id', deleteTeam);

router.use(function(req, res) {
    res.status(404);
    res.render('404');
})

export default router
