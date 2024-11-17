const mongoose = require("mongoose");

const servicesSchema = new mongoose.Schema({
  services: {
    type: String,
  },
  prices: {
    type: Number,
  },
  selectedServicesByUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
  },
});

const Services = mongoose.module("Services", servicesSchema);
module.exports = Services;
