// const dotenv=require("dotenv");
require("dotenv").config();
require("./db/conn");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;
const router = require("./router/auth");
const User = require("./model/userSchema");

app.use(require("./router/auth"));
app.listen(port, () => {
  console.log(`server is started ${port}`);
});
