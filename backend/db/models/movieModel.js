// backend/db/models/movieModel.js
const mongoose = require('mongoose');

// Define the schema for movies
const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    director: {
        type: String,
        required: true,
    },
    cast: [{
        type: String,
        required: true,
    }],
    image: {
        type: String, // URL or path to the image
        required: true,
    },
});

// Create a model from the schema
const Movie = mongoose.model('Movie', movieSchema);

// Export the model
module.exports = Movie;
