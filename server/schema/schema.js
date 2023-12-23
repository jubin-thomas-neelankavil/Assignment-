
const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 3, 
    maxlength: 100, 
  },
  description: {
    type: String,
    required: true,
  },
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
