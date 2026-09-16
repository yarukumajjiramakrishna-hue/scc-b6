const express = require("express");
const mongoose = require("mongoose");
const {Router}=require("./routes/studentRoute.js")
const {configdb}=require("./config/db.js")
const app = express();
app.use(express.json());

app.use("/s",Router)
const port = 1234;
app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
});
//hii friends