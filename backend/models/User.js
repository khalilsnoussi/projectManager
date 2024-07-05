const mongoose = require('mongoose');



const EventSchema = new mongoose.Schema({
  title : {type: String, required : true},
  start : {type: Date, required : true},
  end: {type: Date, required:true}
});

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  events : [EventSchema]
});


module.exports = mongoose.model('User', UserSchema);