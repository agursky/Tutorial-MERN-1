var mongoose = require('mongoose');
var schoolSchema = mongoose.Schema({
    name: String,
    tagline: String
});

module.exports = mongoose.model('school', schoolSchema);

//creating a model for the data that's going to be handled.
// mongoose is a document object mapper which interacts with mongodb in the app. this also interacts with python in some way.

