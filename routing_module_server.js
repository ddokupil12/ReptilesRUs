const express = require("express");
const app = express();
const bodyParser = require('body-parser');
// const db = require("./db_connection.js").db_connection;
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');
const port = 3000;

app.get("/", (req, res) => {
  res.render(`pages/home`, {page_css: "home.css", page_title: "Reptiles \"r\" Us "});
});

app.get("/login", function (req, res) {
  res.render(`pages/login`);
});

// app.get("/val", (req, res) => {
//   console.log(req);
// })

app.get("/unique", function (req, res) {
  res.send("This is a different page!");
});

// app.get("/homepage", (req, res) => {
//   res.send("<!DOCTYPE html><head><meta charset=\"UTF-8\"><title>Reptiles \"R\" Us | Home</title><link rel=stylesheet src=\"main.css\"></head><body><table><thead><th>Product 1</th></thead><tbody><tr><td>dim</td></tr><tr><td>weight</td></tr></tbody></table></body>");
// });

// app.get("/db", function (req, res) {
// 	let sql = `SELECT * FROM books`;
 
//    db.query(sql, (err, result) => {
//        if(err) throw err;
//       console.log(result);
//         res.render(`pages/home_partials`, {books: result, page_title: 'DB Connection Example' });
//     });
// });

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
