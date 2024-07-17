import express from 'express';
const router = express.Router();
import {getLeague, createLeague, updateLeague, deleteLeague} from '../controllers/leagueController.js';

router.post('/', createLeague);
router.get('/:id', getLeague);
router.put('/:id', updateLeague);
router.delete('/:id', deleteLeague);

router.use(function(req, res) {
    res.status(404);
    res.render('404');
})

export default router
