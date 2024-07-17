import express from 'express';
const router = express.Router();
import {getMatch, createMatch, updateMatch, deleteMatch} from '../controllers/matchController.js';

router.post('/', createMatch);
router.get('/:id', getMatch);
router.put('/:id', updateMatch);
router.delete('/:id', deleteMatch);

router.use(function(req, res) {
    res.status(404);
    res.render('404');
})

export default router
