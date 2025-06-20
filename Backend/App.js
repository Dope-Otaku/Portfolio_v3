const express = require("express");
const cors = require("cors");
const Quote = require("inspirational-quotes");
const app = express();

app.use(cors({
  origin: "http://localhost:5173" 
}));

app.get("/", function(req, res) {
  res.send(Quote.getQuote());
});

// Define the port
let port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server started successfully on port ${port}`);
});