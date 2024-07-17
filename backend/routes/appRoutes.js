import express from 'express';
const router = express.Router();
import {dashboard, leagues, teams, players, trainingSessions, recommender} from '../controllers/appController.js'

router.get('/dashboard', dashboard)
router.get('/leagues', leagues)
router.get('/teams', teams)
router.get('/players', players)
router.get('/trainingSessions', trainingSessions)
router.get('/recommender', recommender)

router.use(function(req, res) {
    res.status(404);
    res.render('404');
})

export default router;


