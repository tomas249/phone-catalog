const mongoose = require('mongoose');

const PhoneSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Field `name` is required'],
  },
  manufacturer: {
    type: String,
    required: [true, 'Field `manufacturer` is required'],
  },
  description: {
    type: String,
    required: [true, 'Field `description` is required'],
  },
  color: {
    type: String,
    required: [true, 'Field `color` is required'],
  },
  price: {
    type: Number,
    required: [true, 'Field `price` is required'],
  },
  imageFileName: {
    type: String,
    required: [true, 'Field `imageFileName` is required'],
  },
  screen: {
    type: String,
    required: [true, 'Field `screen` is required'],
  },
  processor: {
    type: String,
    required: [true, 'Field `processor` is required'],
  },
  ram: {
    type: Number,
    required: [true, 'Field `ram` is required'],
  },
});

module.exports = mongoose.model('Phone', PhoneSchema);
