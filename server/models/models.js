var mongoose = require("mongoose");
const TaskSkema = new mongoose.Schema({
  todo:{
    type : String
  },
  isCompleted:{
    type : Boolean
  }
})

const Task = mongoose.model('task',TaskSkema)
module.exports = Task
