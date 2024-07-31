const express = require('express');
const savedSlidesRouter = express.Router();
const { saveSlides, getSavedSlides } = require('../controllers/savedSlidesController'); 


savedSlidesRouter.post('/:username', saveSlides);
savedSlidesRouter.get('/existing/:username', getSavedSlides);

module.exports = savedSlidesRouter;
