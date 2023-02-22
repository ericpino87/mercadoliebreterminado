const express = require("express");
const app = express();
const path= require("path");
app.use(express.static( "public"));

app.get("/", function (req,res){
//junta la ruta del __dirname con la ubicacion de nuestro archivo html para que sea visible para otras computadoras.
// path.join o path.resolve son lo mismo//
    res.sendFile(path.join(__dirname, "./views/home.html"));
});

app.get("/nosotros",function(req,res){
    res.sendFile(path.join(__dirname, "./views/nosotros.html"));
});

app.get("/registrate",function(req,res){
    res.sendFile(path.join(__dirname, "./views/registro.html"));
});

app.get("/ofertas",function(req,res){
    res.sendFile(path.join(__dirname, "./views/ofertas.html"));
});

app.get("/contactanos",function(req,res){
    res.sendFile(path.join(__dirname, "./views/contactanos.html"));
});

app.get("/registro",function(req,res){
    res.sendFile(path.join(__dirname, "./views/registro.html"));
});

app.get("/ingreso",function(req,res){
    res.sendFile(path.join(__dirname, "./views/ingreso.html"));
});

app.get("/miscompras",function(req,res){
    res.sendFile(path.join(__dirname, "./views/carrito.html"));
});

app.listen(3000, function(){
    console.log("El servidor está escuchando en el puerto 3000")
});

