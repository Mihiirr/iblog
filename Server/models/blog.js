const Joi = require('joi');
const mongoose = require('mongoose');

const iblogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 100
    },

    date: {
        type: Date,
        default: Date.now
     },

    description: {
        type: String,
        required: true,
        minlength: 5,
    }
});

const Iblog = mongoose.model('Iblog', iblogSchema);

const blogSchema = Joi.object({
    title: Joi.string().min(5).max(100).required(),
    description: Joi.string().min(5).max(20000).required()
})


exports.Iblog = Iblog;
exports.blogSchema = blogSchema;
