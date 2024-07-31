const express = require('express');
const dotenv = require('dotenv');

const app = express();
const port = 3333;
const userRouter = require('./routes/userRoute');
const storyRouter = require('./routes/storyRoute');
const savedSlidesRouter = require('./routes/savedSlidesRoute')
const likedSlidesRouter = require('./routes/likedSlideRouter')
const cors = require('cors')
dotenv.config();


app.use(cors())
app.use(express.json());

app.use('/user', userRouter);
app.use('/story', storyRouter)
app.use('/saved', savedSlidesRouter)
app.use('/liked', likedSlidesRouter)

const mongoose = require('mongoose');
const db = mongoose.connect(process.env.MONGODB_URI)
    .then(() => { console.log("successfully connected to DB") })
    .catch((err) => { console.log(err) })


app.listen(port, () => {
    console.log("server started successfully")
})


