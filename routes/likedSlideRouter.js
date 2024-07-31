const express = require('express');
const likedSlidesRouter = express.Router();
const {likeSlides, getLikedSlides, deleteLike } = require('../controllers/likeSlidesController'); 


likedSlidesRouter.post('/like/:username', likeSlides);

likedSlidesRouter.get('/existing/:userId', getLikedSlides);

likedSlidesRouter.post('/delete/:username', deleteLike)

module.exports = likedSlidesRouter;
