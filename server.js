const express = require('express');
const app = express();
const cors = require('cors')

require('dotenv').config()
var router = require('./Routes/apiProducts')


app.use(express.json()); // turns my app into a json 
app.use(cors())

app.use("/api", router); // utilize my router to be able to grab information and post it on the page.
 

// this helps with a cross origin error, which allows resticted resources on a web page.


 //creating a port for my server to run on 8080
const port = process.env.SERVER || 3005;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
})