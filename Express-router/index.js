const express = require("express");
const route = require("./route");

const app = express();

app.use(route);




app.listen(3004, function() {
  console.log("Server running on : 3004");
});
