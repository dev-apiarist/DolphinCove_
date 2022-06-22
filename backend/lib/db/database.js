//.....Requirements.....//
const mysql = require("mysql");
const dotenv = require("dotenv");

///.....Initialize Dotenv.....//
dotenv.config();

//.....MySQL Login.....//
let database = mysql.createConnection({
  multipleStatements: true,
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

//.....MySQL Connect.....//
database.connect((err) => {
  if (err) {
    console.log(process.env);
    throw err;
  } else console.log("Successful connection to Database.");
});

//.....Export Connection Object.....//
module.exports = database;
