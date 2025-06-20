const express = require("express");
const Quote = require('inspirational-quotes');
const app = express();
// let port = 8081;


app.get("/", function(req, res) {
  res.send(Quote.getQuote());
});
// let port = process.env.PORT;
let port = 8080
console.log(port)

if(port == null || port == "") {
 port = 5000;
}
app.listen(port, () => {
 console.log("Server started successfully");
});