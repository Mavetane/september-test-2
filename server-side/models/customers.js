var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var customersSchema = new Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  mobileNo: { type: Number, required: true },
  email: { type: String, required: true },
  question: { type: String, required: true },
})

var customersModel = mongoose.model('customers', customersSchema);
module.exports = customersModel;