const User = require('../model/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const registerUser= async (req,res)=>{
    try {
        const {
            Username,
            Password
        } = req.body;

        if(!Username || !Password){
            return res.json({ message : "Please fill all the fields "})
        }

       
        const existingUser= await User.findOne({Username : Username})
        

        if(existingUser){
            return res.json({
                message : "Username already exists, try another"
            })
        }

        const hashedPassword = await  bcrypt.hash(Password, 10);


        const userData = new User({
            Username,
            Password : hashedPassword
        })

        const newUser = await userData.save();
        res.json({
           message : "User Registered Successfully"
        })
        
    } catch (error) {
        res.json(error);
    }
}

const loginUser= async (req,res)=>{
    try {
        const {
            Username,
            Password
        } = req.body;

        if(!Username || !Password){
           return res.json({message : "Please enter all the details"})
        }

        const existingUser = await User.findOne({ Username : Username });

        if (!existingUser) {
            return res.json({ message: "Please enter valid Username" });
        }
    
        const isPasswordValid = await bcrypt.compare(Password, existingUser.Password);
    
        if (!isPasswordValid ) {
            return res.json({ message: "Please enter valid Password" });
        }

        const token = jwt.sign({ userId : Username._id}, 'vinodh');
        res.json({
            message : "User logged in successfully",
            name : Username,
            token : token
        })

    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = { loginUser, registerUser}