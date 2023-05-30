/* express is the framework used to create a web server. cors,body-parsers and mysql12/promise are used for handling cors,parsing json data and connecting to mysql database */
const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const mysql = require('mysql2/promise');

const app = express()/*create an instance of express application*/
/*  add middleware for cors and json parsing */
app.use(cors())
app.use(bodyParser.json())

const port = 8080//define a port to listen o


app.get('/',(req,res) => {
    res.json("Hello world")
})

app.get('/allTables',async (req,res) => {
const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'ip telephony'
      });
 const q = 'SELECT * FROM `depts`'
 const [results] = await connection.query(q)
 return res.json(results)
})


app.listen(port, () => {
    console.log(`App running on port ${port}`)
})