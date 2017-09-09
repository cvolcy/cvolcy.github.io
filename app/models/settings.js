const mongoose = require('mongoose');

let settingsSchema = new mongoose.Schema({
    homeRedirect: { type: String, default: null }
});

settingsSchema.pre('save', function(next) {
  this.updated_at = new Date();
  next();
});

mongoose.model('Settings', settingsSchema);