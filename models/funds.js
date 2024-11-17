const mongoose = require("mongoose");
const fundSchema = new mongoose.Shema({
  username: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: false,
  },
  overAllBalance: { type: Number },
  holdedBalance: { type: Number },
});

const Funds = mongoose.model("Funds", fundSchema);
module.exports = Funds;
