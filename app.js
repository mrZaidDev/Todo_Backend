const express = require("express");
const app = express();
const taskRouter = require('./routes/tasksRoutes')
const taskIdRouter = require('./routes/tasksIdRoutes')
const cors = require('cors')
const mongoose = require('mongoose')

// middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

// ROUTES ...
app.use(taskRouter)
app.use(taskIdRouter)


// DB CONNECTION
require("dotenv").config();
// Connect to MongoDB and start server
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(process.env.PORT || 3000, () => {
      console.log('Server running');
    });
  })
  .catch(err => {
    console.error('MongoDB connection failed:', err.message);
  });


