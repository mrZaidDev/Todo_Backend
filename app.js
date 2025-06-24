const express = require("express");
const app = express();
const taskRouter = require('./routes/tasksRoutes')
const taskIdRouter = require('./routes/tasksIdRoutes')
// const cors = require('cors')
const mongoose = require('mongoose')

// middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))
// app.use(cors())
// require('dotenv').config();

// ROUTES ...
app.use(taskRouter)
app.use(taskIdRouter)

// Connect to MongoDB and start server
mongoose.connect('mongodb+srv://ZaidKhan:mcfniN2015@node-express-projects.bn0xlg9.mongodb.net/CRUD_APP?retryWrites=true&w=majority')
  .then(() => {
    console.log('MongoDB connected');
    app.listen(3000, () => {
      console.log('Server running');
    });
  })
  .catch(err => {
    console.error('MongoDB connection failed:', err.message);
  });


