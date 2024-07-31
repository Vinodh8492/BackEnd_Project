const express = require('express');
const likedSlidesRouter = express.Router();
const {likeSlides, deleteLike, getLikedSlides } = require('../controllers/likeSlidesController'); 


likedSlidesRouter.post('/:username', likeSlides);

likedSlidesRouter.get('/existing/:userId', likeSlides);

likedSlidesRouter.post('/delete/:username', deleteLike)

module.exports = likedSlidesRouter;
