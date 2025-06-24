const modelTask = require("../models/modelTasks");
const express = require("express");
const app = express.Router();

app
  .get("/tasks", async (req, res) => {
    try {
      const allTasks = await modelTask.find({});
      res.status(200).json(allTasks);
    } catch (error) {
      console.log(error);
    }
  })
  .post("/tasks", async (req, res) => {
    try {
      const createdTask = await modelTask.create({ task: req.body.task });
      res.status(201).json({ msg: "created new task", createdTask });
    } catch (error) {
      console.log(error);
    }
  });

module.exports = app;
