var express = require('express');
var bodyParser = require ('body-parser');
var app =  express(); // con este objeto se utiliza para estructurar toda la app

var bodyParse = require('body-parser')
app.use(express.static('public')); // se utiliza para ejecutar funciones middleware
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended:true}))// esas dos lineas funcionan cuando se vaya a utilizar un metodo POST
var usuarios = [{
    nombre: 'Nelson',
    apellido: 'Gonzalez',
    fechaNacimiento: '24/05/1998',
    pais:'colombia'
}];
app.get('/',function(){
res.send('Petición recibida');
});


//Crear un usuario
app.post('/usuarios', function(req, res){
    let usuario = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        fechaNacimiento: req.body.fechaNacimiento,
        pais: req.body.pais
    }
    usuarios.push(usuario); // aqui se guardan los usuarios creados
    res.send({codigoResultado:1,mensaje:'Registro guardado', usuarioGuardado: usuario});
});
//Obtener un usuario
app.get('/usuarios/:id', function(req,res){
    if(req.params.id>(usuarios.length-1))
        res.send({codigoResultado:0,mensaje:"Usuario no existe"});
    res.send(usuarios[req.params.id]); // se esta enviando un elemento Json

});
//obtener todos los usuarios
app.get('/usuarios',function(req,res){
    if(usuarios.length===0)
        res.send({codigoResultado:1,mensaje:"No hay ningun Usuario"});
    res.send(usuarios);
});
//Actualizar usuarios
app.put('/usuarios/:id',function(req,res){
    let usuario = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        fechaNacimiento: req.body.fechaNacimiento,
        pais: req.body.pais
    }
    usuarios[req.params.id]=usuario;
    res.send({codigoResultado:1,mensaje:"Se actualizo el usuario"})


});

app.delete('/usuarios/:id',function(req,res){
    usuarios.splice(req.params.id,1);
    res.send({codigoResultado:1,mensaje:"usuario eliminado"})

    

});

app.listen(8888, function(){
    console.log('se levanto el servidor3');
});