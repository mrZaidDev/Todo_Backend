const mongoose = require("mongoose");
const  SchemaTask= new mongoose.Schema({
  task: {type:String,required:true}
});

const modelTask = mongoose.model('tasks', SchemaTask)

module.exports = modelTask