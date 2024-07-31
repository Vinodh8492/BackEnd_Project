const express = require('express');
const likedSlidesRouter = express.Router();
const {likeSlides, deleteLike } = require('../controllers/likeSlidesController'); 


likedSlidesRouter.post('/:username', likeSlides);

likedSlidesRouter.post('/delete/:username', deleteLike)

module.exports = likedSlidesRouter;
