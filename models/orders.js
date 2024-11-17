const mongoose = require("mongoose");

const ordersSchema = new mongoose.Schema({
  selectedServiceName: {
    type: String,
  },
  selectedServicePrice: {
    type: String,
  },
  ordersStatus: {
    type: String,
  },
});

const Order = mongoose.module("Order", ordersSchema);
module.exports = Order;
