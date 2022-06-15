import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-meu-form',
  templateUrl: './meu-form.component.html',
  styleUrls: ['./meu-form.component.css']
})
export class MeuFormComponent implements OnInit {

  @Input() name: string;
  @Input() resultado: number = 0;

  //ciclo de vida hooks onde quando entra no software ou faz algo esse ciclo de vida comeca e acaba aula 15 lorraine 
  //--save para salvar nodependencies ou no devDependices

  @Output() mudouValor = new EventEmitter(); 

  constructor() { }

  ngOnInit(): void {
  }


  incrementa(){
    this.resultado = this.resultado + 1;
    //ou podemos usar dessa maneira tbm:
    //this.resultado++
    this.mudouValor.emit({novoValor: this.resultado});
  }

  decrementa(){
    this.resultado = this.resultado - 1;
    //basicamente é a mesma coisa porem menos codigo
    //this.resultado--
    this.mudouValor.emit({novoValor: this.resultado});
  }

}
