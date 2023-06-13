var express = require('express');
var app =  express(); // con este objeto se utiliza para estructurar toda la app
app.use(express.static('public')); // se utiliza para ejecutar funciones middleware
app.get('/', function(req, res){ // peticion y respuestas 
    res.send('<html><body><h1>Hola Mundo</h1></body></html>');

}); // Primero asignamos una ruta, luego se le asigna una function()
app.get('/pagina1', function(req, res){ // peticion y respuestas 
    res.send('<html><body><h1>pagina1</h1></body></html>');

});
app.get('/pagina2', function(req, res){ // peticion y respuestas 
    res.send('<html><body><h1>pagina2</h1></body></html>');

});
app.get('/pagina3', function(req, res){ // peticion y respuestas 
    res.send('<html><body><h1>Hola Mundo</h1></body></html>');

});
app.get('/capitulos/:vercapitulo',function(req,res){
    res.send(`<html><body><h1>Capitulo ${req.params.vercapitulo}</h1></body></html>`)
});
app.listen(8888, function(){
    console.log('se levanto el servidor2');
});