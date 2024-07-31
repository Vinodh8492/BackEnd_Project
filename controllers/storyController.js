const Story = require('../model/story');

const createStory = async (req, res) => {
    try {
        const storiesData = req.body;
        const username = req.body

        if (!storiesData || !Array.isArray(storiesData) || storiesData.length === 0) {
            return res.status(400).json({ message: "Invalid or empty request body" });
        }

        const newStories = await Story.insertMany(storiesData);

        res.status(201).json({
            message: "Stories created successfully",
            stories: newStories,
        });
    } catch (error) {
        res.status(500).json(error);
    }
};


const updateStory = async (req,res)=>{
    try {

        const storyId = req.params.storyId;

        if(!storyId){
             return res.json({
                message : "Invalid credentials"
            })
        }

        const {
            Heading,
            Description,
            Image,
            Category
        } = req.body;

        if (!Heading || ! Description || !Image || !Category){
            return res.json({
                message : "Please fill all the details "
            })
        }

        const updatedStory = await Story.updateOne({_id : storyId}, {
            $set : {
                Heading,
                Description,
                Image,
                Category
            }
        })

        if(updateStory){
            res.json({
                message : "Story updated successfully"
            })
        }
        
    
    } catch (error) {
        res.status(500).json(error)
    }
}

const allStories= async (req,res)=>{
    try {

        const Category = req.query.Category;

        let filter = {};
        let formattedCategory;
        if (Category) {
            formattedCategory = Category.split(",");

            if (formattedCategory) {
                const regexArray = formattedCategory.map(
                    (value) => new RegExp(value, "i")
                );

                filter = {
                    skills: { $in: regexArray },
                };
            }
        }

        const storyList = await Story.find(
            {
                Category: { $regex: Category, $options: "i" },
                ...filter,
            },
            {
                Heading: 1,
                Description: 1,
                Image: 1,
                Category: 1,
            }
        );

        res.json({ data: storyList });
        
    } catch (error) {
        res.json(error)
    }
}

const getStoriesById = async (req,res)=>{
    try {
        const storyId = req.params.storyId;

        if(!storyId){
            return res.status(400).json({errorMessage : "Bad Request"})
        }

        const storyDetails = await Story.findById(storyId, {Heading : 1, Description :1, Image:1, Category:1, username : 1});
        res.json({data : storyDetails})
    } catch (error) {
        res.json(error)
    }
}

module.exports = { createStory, updateStory, allStories, getStoriesById };