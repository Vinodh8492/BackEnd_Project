const jwt = require("jsonwebtoken");
const User = require('../model/user')

const verifyToken = (req, res, next) => {
    try {
        const token = req.header("Authorization");
      

        if (!token && token.length < 2) {
            return res.status(401).json({ message: "Unauthorized access" });
        }

        const decode = jwt.verify(token, 'vinodh');
        const isUserValid = User.findById(decode.userId);

        if (!isUserValid) {
            return res.status(401).json({ message: "Unauthorized access" });
        }

       
    } catch (error) {
        console.log(error);
        res.status(401).json({ message: "Invalid token" });
    }
};

module.exports = verifyToken;