import express from 'express';
const router = express.Router();
import {googleAuth, googleAuthCallback, authRedirect} from '../controllers/authController.js';

router.get('/google', googleAuth);
router.get('/google/callback', googleAuthCallback, authRedirect);

router.use(function(req, res) {
    res.status(404);
    res.render('404');
})

export default router;
