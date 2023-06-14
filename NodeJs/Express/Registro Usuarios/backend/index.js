var express = require('express');
var bodyParser = require ('body-parser');
var app =  express(); // con este objeto se utiliza para estructurar toda la app
var usuarios = [{
    Nombre: 'Nelson',
    Apellido: 'Gonzalez',
    fechaNacimiento: '24/05/1998',
    pais:'colombia'
}];
var bodyParse = require('body-parser')
app.use(express.static('public')); // se utiliza para ejecutar funciones middleware
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended:true}))// esas dos lineas funcionan cuando se vaya a utilizar un metodo POST
app.get('/',function(){
res.send('Petición recibida');
});
//Crear un usuario
app.post('/usuarios', function(req, res){
    let usuarios = {
        nombre: req.body.nombre,
        apellido: req.body. apellido,
        fechaNacimiento: req.body.fechaNacimiento,
        pais: req.body.pais
    }
    usuario.push(usuario);
    res.send({mensaje:'Registro guardado', usuarioGuardado: usuario});
});


app.listen(8888, function(){
    console.log('se levanto el servidor3');
});