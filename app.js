const express = require("express");
const app = express();
const ConnectDB = require("./ConnectDB");
const taskRouter = require('./routes/tasksRoutes')
const taskIdRouter = require('./routes/tasksIdRoutes')
const cors = require('cors')

// middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

// ROUTES ...
app.use(taskRouter)
app.use(taskIdRouter)


// DB CONNECTION
require("dotenv").config();
ConnectDB(process.env.MONGO_URI);


// SERVER STARTING
const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server Started on ${PORT} ...`));
