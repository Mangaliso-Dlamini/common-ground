import express from 'express';
const router = express.Router();
import {getFacility, createFacility, updateFacility, deleteFacility} from '../controllers/facilityController.js';

router.post('/', createFacility);
router.get('/:id', getFacility);
router.put('/:id', updateFacility);
router.delete('/:id', deleteFacility);

router.use(function(req, res) {
    res.status(404);
    res.render('404');
})

export default router
