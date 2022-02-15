var express = require("express");
var cors = require("cors");

const router = require('./routes/routers')
const app = express()
require('./models/db')

app.use(express.json())
app.use(cors())
app.use('/',router)

app.listen(3333,err=>{
  if(err)console.log(err);
  console.log('server started');
})