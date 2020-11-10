const mongoose = require("mongoose");

const MONGO_CONNECTION_STRING =
  "mongodb+srv://webUser:TkL3GUmFnoiTT32r@cluster0.ubhcy.mongodb.net/pokedex?retryWrites=true&w=majority";
mongoose.connect(MONGO_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const User = mongoose.model("User", {
  username: String,
  password: String,
  email: String,
  name: String
});
exports.User = User;
