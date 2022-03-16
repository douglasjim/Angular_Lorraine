import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class CursosService {

  //http

  constructor() { }

  //como se fosse os valores vindo do servico pelo metodo post ou get 
  getCursos(){
    return ["java2","python","Jython","Flask"]
  }
}
