const express = require('express');
const storyRouter = express.Router();

const { createStory, updateStory, allStories, getStoriesById } = require('../controllers/storyController')

storyRouter.post('/create', createStory);

storyRouter.put('/edit/:storyId', updateStory);

storyRouter.get('/getall', allStories)

storyRouter.get('/details/:storyId', getStoriesById)



module.exports = storyRouter;

