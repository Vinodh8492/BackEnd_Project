const express = require('express');
const userRouter = express.Router();

const { loginUser, registerUser, getUserDetails } = require('../controllers/userController')

userRouter.post('/login', loginUser);

userRouter.post('/register', registerUser)

userRouter.post('/details', getUserDetails)


module.exports = userRouter;