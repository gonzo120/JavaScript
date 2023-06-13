var express = require('express');
var app =  express(); // con este objeto se utiliza para estructurar toda la app
var bodyParse = require('body-parser')
app.use(express.static('public')); // se utiliza para ejecutar funciones middleware
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended:true}))// esas dos lineas funcionan cuando se vaya a utilizar un metodo POST
app.get('/', function(req, res){ // peticion y respuestas 
    res.send('<html><body><h1>Hola Mundo</h1></body></html>');

}); // Primero asignamos una ruta, luego se le asigna una function()
app.get('/pagina1', function(req, res){ // peticion y respuestas 
    res.send('<html><body><h1>pagina1</h1></body></html>');
});
app.get('/capitulos/:vercapitulo',function(req,res){
    res.send(`<html><body><h1>Capitulo ${req.params.vercapitulo}</h1></body></html>`)
});
app.get('/guardar', function(req, res){ // peticion y respuestas 
   res.send(`Guardar un usuario ${req.query.Nombre}`);
});
app.listen(8888, function(){
    console.log('se levanto el servidor2');
});

/*
GET=> se envian en la URL en formator URLEncoded
req. query
POST=> se envian empaquetados no visibles en el cuerpo de la peticion
req. body
Parametros tip express : nonbreParametro
req.params */