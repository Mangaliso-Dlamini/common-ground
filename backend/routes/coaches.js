import express from 'express';
const router = express.Router();
import { createCoach, getCoach, updateCoach, deleteCoach } from '../controllers/coachController.js';

router.post('/', createCoach);
router.get('/:id', getCoach);
router.put('/:id', updateCoach);
router.delete('/:id', deleteCoach);

router.use(function(req, res) {
    res.status(404);
    res.render('404');
})

export default router;
