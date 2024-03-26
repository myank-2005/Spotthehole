// 1.

// const mysql =require("mysql");
// const express=require("express");
// const bodyPaser =require("body-parser");
// const encoder =require("encoder");
// const app = express();
// app.use("/assets",express.static("assets"));

// const connection =mysql.createConnection({
//     host:"127.0.0.1",
//     user:"root",
//     database:"user",
//     password:"#MYSQLPASSWORD#"
// });

// //connect to the database

// connection.connect(function(error){
//     if(error)throw error
//     else console.log("connected to the database successfully!!")
// });

// app.get("/",function(req,res){
//     res.sendFile(__dirname + "/index.html");
// })

// app.post("/",encoder,function(req,res){
//     var email =req.body.email;
//     var password =req.body.password;
//     connection.query("select * from login",[email,password],function(error,result,fields){
//         if(result.lenght>0){
//             res.redirect("/index.html")
//         }else{
//             res.redirect("/");
//         }
//         res.end();
//     })
// })
// app.get("/welcome",function(req,res){
//     res.sendFile(__dirname + "/index.html")
// })
// app.listen(5000);

// -------------------------------------------------------------------

// 2.

// const express = require("express");
// const bodyParser = require("body-parser");
// const mysql = require("mysql");

// // app.use(bodyParser.json());

// const app = express();
// app.use("/assets", express.static("assets"));

// const connection = mysql.createConnection({
//     host: "127.0.0.1",
//     user: "root",
//     database: "user",
//     password: "#MYSQLPASSWORD#"
// });

// // Connect to the database
// connection.connect(error => {
//     if (error) throw error;
//     else console.log("Connected to the database successfully!");
// });

// app.get("/", (req, res) => {
//     res.sendFile(__dirname + "/login.html");
// });

// app.post("/", (req, res) => {
//     const email = req.body.email;
//     const password = req.body.password;
//     connection.query("SELECT * FROM login WHERE email = ? AND password = ?", [email, password], (error, result) => {
//         if (result.length > 0) {
//             res.redirect("/");
//         } else {
//             res.redirect("/");
//         }
//         res.end();
//     });
// });

// app.get("/welcome", (req, res) => {
//     res.sendFile(__dirname + "/index.html");
// });

// app.listen(5000);



// ------------------------------------------------------

// 3.
// const con=require("./connection");
// const express = require("express");
// const app=express();


// const bodyParser=require("body-parser");

// app.use(bodyParser.json());

// app.use(bodyParser.urlencoded({extended:true}));



// app.get("/",function(req,res){
//     res.sendFile(__dirname+"login.html");
// });

// app.post("/",function(req,res){
// const email= req.body.email;
// const password= req.body.password;

// con.connect(function(error){
//     if(error)throw error;
//     const sql="INSERT INTO THE STUDENTS(email,password) VALUES ('"+email+"','"+password+"')";
//     con.query(sql,function(error,result){
//     if(error)throw error;
//     res.send("Students Register Successfull" +result.insertID);
//     })
// });
// });

// app.listen(5000);

// ---------------------------------------------------------------------------------------------------------------------
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// MySQL Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'your_username',
  password: 'your_password',
  database: 'your_database_name'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});

// Routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/login.html');
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const sql = `INSERT INTO users (username, password) VALUES ('${username}', '${password}')`;

  db.query(sql, (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Error saving user data');
    } else {
      console.log('User data saved successfully');
      // Redirect to main page after successful login
      res.redirect('/main');
    }
  });
});

app.get('/main', (req, res) => {
  res.sendFile(__dirname + '/main.html');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
