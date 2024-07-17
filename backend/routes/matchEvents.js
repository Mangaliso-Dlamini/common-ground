import express from 'express';
const router = express.Router();
import {getMatchEvent, createMatchEvent, updateMatchEvent, deleteMatchEvent} from '../controllers/matchEventController.js';

router.post('/', createMatchEvent);
router.get('/:id', getMatchEvent);
router.put('/:id', updateMatchEvent);
router.delete('/:id', deleteMatchEvent);

router.use(function(req, res) {
    res.status(404);
    res.render('404');
})

export default router
