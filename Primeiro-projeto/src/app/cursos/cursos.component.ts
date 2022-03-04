import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {




  nomePortal: string;
  cursos: string[] = ["java2","python","Jython","Flask"]



  constructor() { 
    this.nomePortal = "https://www.cursos.com.br"

    for (let i=0; i<this.cursos.length; i++){
      let curso = this.cursos[i]
      console.log("teste Curso: " + curso)
    }
  }

  ngOnInit(): void {
  }

}
