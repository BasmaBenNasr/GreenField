const db = require('./dbConfig');

db.on('error', function() {
    console.log('mongoose connection error');
  });
  
  db.once('open', function() {
    console.log('mongoose connected successfully');
  });

jaSchema = new Schema({
    description: String,
    contact: String,
    address: String,
    price: Number,
    employeeEmail: String,
    providerEmail: String,
})

module.exports = mongoose.model('JA', jaSchema);