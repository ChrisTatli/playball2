'use strict;'

var mongoose = require('mongoose');

var eventSchema = mongoose.Schema({
  'title': {
    type: String,
    required: true
  },
  'description': {
    type: String,
    required: true
  },
  'address': {
    type: String,
    required: true
  },
  'numParticipants': {
    type: String,
    required: true
  },
  'sport': {
    type: String,
    required: true
  },
  'start': {
    type: String,
    required: true
  },
  'img_url': {
    type: String,
    required: true
  },
  'creator': {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User'
  },
  'participants':
    [{
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'User'
    }]
  }
);

eventSchema.index({ name: 'text', description: 'text' });

mongoose.model('Event', eventSchema);
