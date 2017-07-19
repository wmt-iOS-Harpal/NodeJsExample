const express = require("express");
const app = express();


app.get("/get", function(req, res) {
  res.send("GET request");
});

//you can enter Y more than one
app.get("/xy+za", function(req, res) {
  res.send("GET request with +");
});

app.get("/har?pal", function(req, res) {
  res.send("GET request with ?");
});


app.get('/harpal*ios', function (req, res) {
  res.send("GET request with *");
});


app.get(/.*.php$/, function (req, res) {
  res.send("GET request with /*.php/");
});

//Pass parameter in URL
app.get('/Court/:courtName/type/:courtType', function (req, res) {
    res.send(req.params);
});


app.route('/RequestType')
.get(function(req, res) {
    res.send("User call GET request");
})
.post(function(req, res) {
      res.send("User call POST request")
})
.delete(function(req, res) {
  res.send("User call DELETE request")
})
.put(function(req, res) {
  res.send("User call PUT request")
});

app.listen(3003, function() {
  console.log("Server running on : 3003");
});
