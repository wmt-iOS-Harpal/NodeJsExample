const express = require("express");
const app = express();


app.get("/get", function(req, res) {
  res.send("GET request");
});

app.post("/post", function(req, res) {
  res.send("POST request")
});

app.put("/put", function(req, res) {
  res.send("PUT request")
});

app.delete("/delete", function(req, res) {
  res.send("DELETE request")
});

app.listen(3001, function() {
  console.log("Server running on : 3001");
});
