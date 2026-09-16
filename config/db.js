const mongoose=require("mongoose")
const configdb=mongoose
  .connect("mongodb://localhost:27017/csec_students")
  .then(() => {
    console.log("mongodb is connected");
  })
  .catch((e) => {
    console.log(`error is ${e}`);
  });
module.exports={configdb}