const express = require('express');
const savedSlidesRouter = express.Router();
const { saveSlides } = require('../controllers/savedSlidesController'); 


savedSlidesRouter.post('/:username', saveSlides);
savedSlidesRouter.get('/existing/:username', saveSlides);

module.exports = savedSlidesRouter;
