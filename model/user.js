const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    Username : {
        type : String,
        required : true
    },
    Password : {
        type : String,
        required : true
    },
    savedSlides: {
        type: [String], 
        default: []
      },
    likedSlides: {
        type: [String], 
        default: []
      }

})

const User = mongoose.model('User', userSchema);
module.exports = User;