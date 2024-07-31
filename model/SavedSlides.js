const mongoose = require('mongoose');

const savedSlidesSchema = new mongoose.Schema({
  username: {
    type: String
  },
  savedSlides: {
    type: [String], 
    default: [],
  },
});

const SavedSlides = mongoose.model('SavedSlides', savedSlidesSchema);

module.exports = SavedSlides;
