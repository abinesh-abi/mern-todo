var express = require("express");
const router = express.Router();
const Task = require('../models/models')

router.get('/',(req,res)=>{
Task.find()
.then((val)=>res.json(val))
.catch((err)=>console.log(err))
})

router.post('/',(req,res)=>{
  const task = new Task(req.body)
  task.save()
  .then(val=>res.json(val))
  .catch(err=>console.log(err))
})


module.exports = router;
