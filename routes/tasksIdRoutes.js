const modelTask = require("../models/modelTasks");
const express = require("express");
const app = express.Router();

app.get("/tasks/:id", async (req, res) => {
    const taskId = req.params.id;
  try {
    const findTask = await modelTask.findById(taskId)
    res.status(200).json(findTask)
  } catch (error) {
    console.log(error);
  }
});
app.patch('/tasks/:id', async (req,res) => {
    try {
        const updateTask = await modelTask.findByIdAndUpdate(req.params.id,{ $set:{task:req.body.task} })
        res.status(201).json({msg:'Updated Task', updateTask})
    } catch (error) {
        console.log(error)
    }
})
app.delete('/tasks/:id', async (req,res) => {
    try {
        await modelTask.findByIdAndDelete(req.params.id)
        res.status(200).json({msg:'Deleted Task'})
    } catch (error) {
        console.log(error)
    }
})
module.exports = app
