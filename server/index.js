const express = require('express')
const cors = require('cors')
const {connect} =require('mongoose')
require('dotenv').config()

const app = express();
connect(process.env.MONGO_DB_URL).then(app.listen(5000,()=> console.log(`server is running on  port ${process.env.PORT} 
    & MongoDb is also Connected Successfully `))).catch(error=>{console.log(error)});
 
