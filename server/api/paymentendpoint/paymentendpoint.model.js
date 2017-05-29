'use strict';

import mongoose from 'mongoose';

var PaymentendpointSchema = new mongoose.Schema({
  movie: String,
  theatre: String,
  bookedSeats: String,
  grandTotal: Number,
  date: String,
  time:String
});

export default mongoose.model('Paymentendpoint', PaymentendpointSchema);
