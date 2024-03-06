const express = require("express");
const app = express();
const port = 3000;

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.get("/unique", function (req, res) {
  res.send("This is a different page!");
});

app.get("/home", (req, res) => {
  res.send("<!DOCTYPE html><head><meta charset=\"UTF-8\"><title>Reptiles \"R\" Us | Home</title></head><body>Hello home page</body>")
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
