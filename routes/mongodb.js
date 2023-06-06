var mongoose = require("mongoose");
var schema = mongoose.Schema;
mongoose.connect("mongodb://localhost:27017/msdb")
  .then(() => {
    console.log("mongo connected");
  })
  .catch(() => {
    console.log("failed to connect");
  });
var logschema = new schema({
    Email: { type: String, required: true },
  Password: { type: String, required: true },
});
module.exports = new mongoose.model("user", logschema);
