const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      minlength: [3, "Name must be more than 3 characters"],
      maxlength: [10, "Name must be less than or equal to 10 characters"],
    },
    password: { type: String, required: true },
    phone: { type: String, require: true },
    email: { type: String, require: true },
    balance: { type: Number, default: 0 },
  },

  { timestamps: true }
);

const Users = mongoose.model("Users", userSchema);
module.exports = Users;
