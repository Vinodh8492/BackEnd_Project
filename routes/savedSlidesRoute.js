const express = require('express');
const savedSlidesRouter = express.Router();
const { saveSlides, getSavedSlides } = require('../controllers/savedSlidesController'); 


savedSlidesRouter.post('/:username', saveSlides);
savedSlidesRouter.get('/existing/:userId', getSavedSlides);

module.exports = savedSlidesRouter;
