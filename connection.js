
const mysql = require("mysql");
const con=mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    database:"login"
});

module.exports =con;