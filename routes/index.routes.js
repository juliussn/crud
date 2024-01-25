const express = require("express");
const Movie = require("../models/peliculas");
const router = express.Router();

router.post('/movies',(req, res)=>{
    const peli = Movie(req.body);
    peli
    .save()
    .then((data)=>res.json(data),console.log("dato resivido correctamente"))
    .catch((error)=>console.log ("tu error es :"+error))

})

module.exports = router;