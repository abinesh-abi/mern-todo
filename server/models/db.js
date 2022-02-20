var mongoose = require("mongoose");
module.exports = mongoose.connect('mongodb://127.0.0.1:27017/todolist',{
  useUnifiedTopology:true,
  useNewUrlParser :true,
  useFindAndModify: false
},err=>{
  if (err)console.log('error in db conect');
  console.log('database conected');
})

