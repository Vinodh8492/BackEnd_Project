const SavedSlides = require('../model/SavedSlides'); 
const User = require('../model/user')


const saveSlides = async (req, res) => {
    const { slideId } = req.body;
    const { username } = req.params; // Get username from route params
  
    if (!username || !slideId) {
      return res.status(400).json({ message: 'Username and slideId are required' });
    }
  
    try {
      // Find the user
      let user = await User.findOne({ Username: username });
  
      if (user) {
        // If the user already has saved slides, update the list
        if (!user.savedSlides.includes(slideId)) {
          user.savedSlides.push(slideId);
          await user.save();
          return res.status(200).json({ message: 'Slide saved successfully', savedSlides: user.savedSlides });
        } else {
          return res.status(200).json({ message: 'Slide already saved', savedSlides: user.savedSlides });
        }
      } else {
        return res.status(404).json({ message: 'User not found' });
      }
    } catch (error) {
      console.error('Error saving slide:', error);
      return res.status(500).json({ message: 'Server error' });
    }
  };


  const getSavedSlides = async (req, res) => {
    const { userId } = req.params; // Get username from route params
  
    if (!userId) {
      return res.status(400).json({ message: 'Username is required' });
    }
  
    try {
      // Find the user
      const user = await User.findOne({ Username: userId });
  
      if (user) {
        return res.status(200).json({ savedData: user.savedSlides });
      } else {
        return res.status(404).json({ message: 'User not found' });
      }
    } catch (error) {
      console.error('Error fetching saved slides:', error);
      return res.status(500).json({ message: 'Server error' });
    }
  };

  const deleteSlide = async (req, res) => {
    const { slideId } = req.body;
    const { username } = req.params; // Get username from route params

    if (!username || !slideId) {
        return res.status(400).json({ message: 'Username and slideId are required' });
    }

    try {
        // Find the user
        let user = await User.findOne({ Username: username });

        if (user) {
            // If the user has saved slides, update the list
            if (user.savedSlides.includes(slideId)) {
                // Remove the slide from the savedSlides array
                user.savedSlides = user.savedSlides.filter(id => id !== slideId);
                await user.save();
                return res.status(200).json({ message: 'Slide removed successfully', savedSlides: user.savedSlides });
            } else {
                return res.status(404).json({ message: 'Slide not found in saved slides' });
            }
        } else {
            return res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        console.error('Error removing slide:', error);
        return res.status(500).json({ message: 'Server error' });
    }
};



module.exports = { saveSlides, getSavedSlides, deleteSlide };
