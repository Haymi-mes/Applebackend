
const mysql = require("mysql2");
const express = require("express");
const cors = require("cors")
// const bodyparser = require("body-parser")

//creat an instance of express
const app = express();

app.use(cors())

// middle ware to extract info from HTML body
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.listen(2026, () => {
  console.log("Server on http://localhost:2026");
});
app.get("/", (req, res) => {
  res.send("running");
});

const connection = mysql.createConnection({
  host: "82.197.82.42",
  user: "u677091426_himeynathan",
  password: "kN5kYzJp0/H+",
  database: "u677091426_himeynathan",
  // socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
});
// // connecting to MySQL database
connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Database is connected");
  }
});
 //product_brief_description,product_description,product_img
app.get("/iphones", (req, res) =>{
    let dataquery = `SELECT * FROM products JOIN description JOIN productPrice ON products.product_id= description.product_id AND products.product_id= productPrice.product_id `;
    connection.query(dataquery, (err,result) =>{
      console.log(result); 
      if(err){
        console.log(err);
        
      }
     
      res.send(result);
    })
})
