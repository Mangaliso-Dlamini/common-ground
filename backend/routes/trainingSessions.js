import express from 'express';
const router = express.Router();
import {getTrainingSession, createTrainingSession, updateTrainingSession, deleteTrainingSession} from '../controllers/trainingSessionController.js';

router.post('/', createTrainingSession);
router.get('/:id', getTrainingSession);
router.put('/:id', updateTrainingSession);
router.delete('/:id', deleteTrainingSession);

router.use(function(req, res) {
    res.status(404);
    res.render('404');
})

export default router
