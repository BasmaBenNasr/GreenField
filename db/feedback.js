const db = require("./dbConfig");
const mongoose = require("mongoose");

feedbackbSchema = new mongoose.Schema({
  description: { type: String, required: true },
  employeeEmail: { type: String, required: true },
});

let Fb = mongoose.model("Feedback", feedbackbSchema);

module.exports.findAll = () => {
  return new Promise((resolve, reject) => {
    Fb.find({}, function (err, data) {
      if (err) return reject(err);
      else {
        resolve(data);
      }
    });
  });
};
