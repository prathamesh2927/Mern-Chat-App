const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const connectDB = require("./config/db");
const morgan = require("morgan");
var colors = require("colors");

dotenv.config();
//dbConnect
connectDB();

//server
const app = express();

// Use morgan for logging HTTP requests
app.use(morgan("tiny"));

//routes
app.get("/", (req, res) => {
  res.send("welcome to My chat Application");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
  const singleChat = chats.find((c) => c._id === req.params.id);
  res.send(singleChat);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`.green);
});
