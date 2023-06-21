import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
    selector: 'app-registro-usuario',
    templateUrl: './registro.usuarios.component.html'
    //styleUrls: [':/registro-usuarios.component.css']
})



export class RegistroUsuariosComponent implements OnInit{
    //personas:any =[];//arreglo
    persona:any ={
        nombre:'Nelson',
        apellido:'Gonzalez',
        edad:'22',
        password:'NGC.123'
    }
    //aqui hacemos la 
    constructor (private httpClient:HttpClient){}

    ngOnInit(){ 
    }   


    guardar(){
        
    this.httpClient.post('http://localhost:8888/usuarios',this.persona)
    .subscribe(res=>{
        console.log(res);
    });
    }
}