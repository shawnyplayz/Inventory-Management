const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const itemSchema = Schema({
  name1: {
    type: String,
    required: true,
  },
  name2: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },

  vendorName: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
    trim: true,
  },
})



module.exports = mongoose.model('item', itemSchema)