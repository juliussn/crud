const mongoose = require('mongoose');

const movieSchema= new mongoose.Schema({
    name:{
        type: String,
    },

    description:{
        type: String,
    },

    lanzamiento:{
        type:Number,
    },

    genero:{
        type:String,
    }
})


module.exports=mongoose.model('Peliculas', movieSchema);