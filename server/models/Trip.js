const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const tripSchema = new Schema(
  {
    tripDays: {
      type: Number,
      required: true
    },
    tripCost: {
        type: Number,
        required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    username: {
      type: String,
      required: true
    },
    activites: {
        type: String,
        required: false
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);

const Trip = model('Trip', tripSchema);

module.exports = Trip;
