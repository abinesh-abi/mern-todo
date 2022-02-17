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

router.put('/:id',(req,res)=>{
  Task.findOneAndUpdate({
    _id:req.params.id
  },req.body,{new:true},(err,doc)=>{
    if(err)console.log(err);
    res.json(doc)
  })
})
router.delete('/:id',(req,res)=>{
  console.log(req.params.id);
  Task.findByIdAndDelete(req.params.id,(err,doc)=>{
    if(err)console.log(err);
    res.json(doc)
  })
})


module.exports = router;
