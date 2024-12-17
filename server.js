const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.send("Express Application is Running Very Fast");
});

app.listen(4000, "0.0.0.0", () => {
  console.log(`Server Started on Port: 4000`);
});
