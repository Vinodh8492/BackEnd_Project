const mongoose = require('mongoose');

const storySchema = mongoose.Schema({
    Heading : {
        type : String,
        required : true
    },
    Description : {
        type : String,
        required : true
    },
    Image : {
        type : String,
        required : true
    },
    Category : {
        type : Array,
        required : true
    },
    username :{
        type : String,
        required: true
    }
})

const Story = mongoose.model('Story', storySchema);
module.exports = Story;