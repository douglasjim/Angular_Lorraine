import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service'

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {




  nomePortal: string;
  cursos: string[] = ["java2","python","Jython","Flask"] //maneira certa seria colocar isso na service onde irá vir os valores
  cursos2;



  constructor(private crusosService:CursosService) { 
    // this.nomePortal = "https://www.cursos.com.br"

    // for (let i=0; i<this.cursos.length; i++){
    //   let curso = this.cursos[i]
    //   console.log("teste Curso: " + curso)
    // }

    var servico = new CursosService();
    this.cursos2 = this.crusosService.getCursos();
    //console.log("cursos2 " + this.cursos2)

  }

  ngOnInit(): void {
    console.log("cursos2 " + this.cursos2)


  }

}
