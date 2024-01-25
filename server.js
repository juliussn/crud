const  mongoose = require('mongoose');
const express= require("express")
const app = require ("./app");
const routes= require("./routes/index.routes")


app.use(express.json())
app.use("/api", routes);


mongoose
.connect("mongodb+srv://Julian:13181924@peliculas.d1ktgaj.mongodb.net/?retryWrites=true&w=majority/")
.then(()=> console.log("base de datos conectada"))
.catch((error)=>console.log("hay un error no se pudo conectar " + error));


const port = 8080;
app.listen(port, () => {
    console.log(`El servidor está escuchando en http://localhost:${port}`);
});
