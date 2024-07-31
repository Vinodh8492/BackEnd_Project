const express = require('express');
const likedSlideRouter = express.Router();
const { likeSlides, deleteLike} = require('../controllers/likeSlidesController'); 


savedSlidesRouter.post('/:username', likeSlides);
savedSlidesRouter.post('/delete/:username', deleteLike)

module.exports = likedSlideRouter;
