var express = require("express");
const router = require('./routes/routers')
const app = express()
require('./models/db')

app.use('/',router)

app.listen(3333,err=>{
  if(err)console.log(err);
  console.log('server started');
})