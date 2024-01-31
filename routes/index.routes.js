const express = require("express");
const Movie = require("../models/peliculas");
const router = express.Router();


// create
router.post('/movies',(req, res)=>{
    const peli = Movie(req.body);
    peli
    .save()
    .then((data)=>res.json(data),console.log("dato resivido correctamente"))
    .catch((error)=>console.log ("tu error es :"+error))

})

//Pedir todos los usuarios
router.get('/movies',(req, res)=>{
    Movie
    .find()
    .then((data)=>res.json(data),console.log("dato resivido correctamente"))
    .catch((error)=>console.log ("tu error es :"+error))

})

// pedir un usuario
router.get('/movies/:id',(req, res)=>{
    const {id} = req.params
    Movie
    .findById(id)
    .then((data)=>res.json(data),console.log("dato resivido correctamente"))
    .catch((error)=>console.log ("tu error es :"+error))

})

// actualizar un usuario
router.put("/movies/:id",(req, res)=>{
    const {id} = req.params;
    const {name, description, lanzamiento, genero}= req.body;
    Movie
    .updateOne(id)
    .then((data)=>res.json(data),console.log("dato resivido correctamente"))
    .catch((error)=>console.log ("tu error es :"+error))

})

router.put("/movies/:id",(req, res)=>{
    const {id} = req.params;
    const {name, description, lanzamiento, genero}= req.body;
    Movie
    .updateOne({_id: id}, {$set: {name, description, lanzamiento, genero}})
    .then((data)=>res.json(data),console.log("dato resivido correctamente"))
    .catch((error)=>console.log ("tu error es :"+error))

})

router.delete("/movies/:id",(req, res)=>{
    const {id} = req.params;
    Movie
    .deleteOne({_id:id})
    .then((data)=>res.json(data),console.log("dato resivido correctamente"))
    .catch((error)=>console.log ("tu error es :"+error))

})

module.exports = router;