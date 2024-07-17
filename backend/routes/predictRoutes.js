import express from 'express';
const router = express.Router();
import { predict } from '../controllers/predictController.js';

router.post('/', predict);

router.use(function(req, res) {
    res.status(404);
    res.render('404');
})

export default router;
