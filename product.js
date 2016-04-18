var mongoose = require('mongoose');
var Category = require('./category');

var productSchema = {
    name: {
        type: String,
        required: true
    },
    //pictures must start with http://
    pictures: [{
        type: String,
        required: true
    }]
}