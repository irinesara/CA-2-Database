const { default: mongoose, model } = require("mongoose");

const movieschema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    director:{
        type:String,
        required:true
    },
    genre:{
        type:String,
        required:true
    },
    releaseYear:{
        type:Number
    },
    availableCopies:{
        type:Number,
        required:true
    },
});

const Movie = model("Movie",movieschema)
module.exports = Movie