const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let currentToken = 0;

app.get("/", (req, res) => {
  res.send("Hospital Backend Running");
});

app.get("/token", (req, res) => {
  currentToken++;
  res.json({ token: currentToken });
});

app.get("/current", (req, res) => {
  res.json({ currentToken });
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Server running...");
});
