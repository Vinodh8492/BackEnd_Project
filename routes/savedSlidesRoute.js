const express = require('express');
const savedSlidesRouter = express.Router();
const { saveSlides, getSavedSlides, deleteSlide } = require('../controllers/savedSlidesController');


savedSlidesRouter.post('/:username', saveSlides);

savedSlidesRouter.get('/existing/:userId', getSavedSlides);

savedSlidesRouter.post('/delete/:username', deleteSlide)

module.exports = savedSlidesRouter;
