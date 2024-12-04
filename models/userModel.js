const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: [true, "An user must have an id."]
  },
  name: String,
  email: {
    type: String,
    required: [true, "An user must have an email"]
  },
  password: String
});

// {
//     "id": 1,
//     "name": "John Doe",
//     "email": "jdoe@gmail.com",
//     "password": "jd1234"
// }

userSchema.set("collection", "user");
const User = mongoose.model("User", userSchema);

module.exports = User;
