
const User = require('../model/user')


const likeSlides = async (req, res) => {
    const { slideId } = req.body;
    const { username } = req.params; 
  
    if (!username || !slideId) {
      return res.status(400).json({ message: 'Username and slideId are required' });
    }
  
    try {
      let user = await User.findOne({ Username: username });
  
      if (user) {
       
        if (!user.likedSlides.includes(slideId)) {
          user.likedSlides.push(slideId);
          await user.save();
          return res.status(200).json({ message: 'Slide liked successfully', likedSlides: user.likedSlides });
        } else {
          return res.status(200).json({ message: 'Slide already liked', likedSlides: user.likedSlides });
        }
      } else {
        return res.status(404).json({ message: 'User not found' });
      }
    } catch (error) {
      console.error('Error liking slide:', error);
      return res.status(500).json({ message: 'Server error' });
    }
  };



  const getLikedSlides = async (req, res) => {
    const { userId } = req.params; 
  
    if (!userId) {
      return res.status(400).json({ message: 'Username is required' });
    }
  
    try {
      const user = await User.findOne({ Username: userId });
  
      if (user) {
        return res.status(200).json({ likedData: user.likedSlides });
      } else {
        return res.status(404).json({ message: 'User not found' });
      }
    } catch (error) {
      console.error('Error fetching liked slides:', error);
      return res.status(500).json({ message: 'Server error' });
    }
  };


  const deleteLike = async (req, res) => {
    const { slideId } = req.body;
    const { username } = req.params; 

    if (!username || !slideId) {
        return res.status(400).json({ message: 'Username and slideId are required' });
    }

    try {
       
        let user = await User.findOne({ Username: username });

        if (user) {
            if (user.likedSlides.includes(slideId)) {
                user.likedSlides = user.likedSlides.filter(id => id !== slideId);
                await user.save();
                return res.status(200).json({ message: 'Slide like removed successfully', likedSlides: user.likedSlides });
            } else {
                return res.status(404).json({ message: 'Slide not found in liked slides' });
            }
        } else {
            return res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        console.error('Error removing slide like :', error);
        return res.status(500).json({ message: 'Server error' });
    }
};



module.exports = { likeSlides, getLikedSlides, deleteLike };
