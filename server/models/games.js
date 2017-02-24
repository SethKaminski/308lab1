let mongoose = require('mongoose');

let gameScema = mongoose.Schema({
    name: String,
    rating: Number,
    cost: Number
},
{
    collection: "game"
});

module.exports = mongoose.model('games', gameScema);