//Modulos de node
var http = require('http');
var fs = require('fs');//para leer archivos NodeJs
var nombre = "Nelson2";
// se crea el servidor
http.createServer(function(req, res){
    // se ejecutará por cada peticion del usuario
    //condicionamos las paginas donde vamos a ingresar
    if(req.url == '/pagina1'){
        res.writeHead(200, {'content-type':'text/html'}); //peticion que esta recibiendo el cliente 
        //200 Ok codigos de http
        //para incrustar una expresion JS ${}
        res.write(`<http><head><link rel="stylesheet" href="/estilos"></head><body><h1>${nombre} Gonzalez</h1></body></http`); // lo que le enviaremos al cliente
        res.end();
    }else if(req.url == '/pagina2'){
        res.writeHead(200, {'content-type':'text/html'}); //peticion que esta recibiendo el cliente 
        //200 Ok codigos de http
        //para incrustar una expresion JS ${}
        res.write(`<http><body><h1>Pagina 2</h1></body></http`); // lo que le enviaremos al cliente
        res.end();
    }else if(req.url == '/estilos'){
        res.writeHead(200, {'Content-type':'text/css'}); //peticion que esta recibiendo el cliente 
        //200 Ok codigos de http
        //para incrustar una expresion JS ${}
        res.write(`h1{color:red;}`); // lo que le enviaremos al cliente
        res.end();
    }else if(req.url == '/formulario'){
        fs.readFile('./formulario.html', function(error, data){ //2 objetos
            res.writeHead(200, {'Content-type':'text/html'}); //peticion que esta recibiendo el cliente 
            if (error)
                res.write(error);
            else
                res.write(data); // lo que le enviaremos al cliente
            res.end();

        });
    } else{

        res.writeHead(200, {'content-type':'text/html'}); //peticion que esta recibiendo el cliente 
        //200 Ok codigos de http
        //para incrustar una expresion JS ${}
        res.write(`<http><body><h1>404 Not found</h1></body></http`); // lo que le enviaremos al cliente
        res.end();
    };
   
}).listen(4200,function(){// se crea una funcion callback
    console.log('se levanto el servidor');
});