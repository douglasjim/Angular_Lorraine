import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = "http:www.teste.com.br";
  img: string;
  //podemos iniciar a variavel vazia ou nao, mas sempre bom colocar o tipo dela
  valorAtualInput: string = '';
  valorSalvo;
  isMouseOver;

  constructor() { }

  ngOnInit(): void {
    this.img = "http://lorempixel.com.br/200/200/?1"
  }



  result(){
    return 10
  }

  addCliente(){
    console.log("cliente adicionado")
  }

  onKeyUp(evento){
    console.log("onKeyUpChamado", evento.target.value);
    this.valorAtualInput = evento.target.value;
    console.log("this.valorAtualInput" + this.valorAtualInput)
  }

  onKeyUpEnter(valor){
    this.valorSalvo = valor;
    console.log("valorSalvo" , this.valorSalvo)
  }

  //a funcao blur no input serve para quando o campo input perder o foco a funcao blur é chamada
  inputBlur(valorBlur){
    console.log("valorBlur" , valorBlur)
  }

  onKeyUpEnterVariavelDaView(valorDaView){
    console.log("valorDaView", valorDaView)
  }

  onMouseOver(){
    this.isMouseOver = !this.isMouseOver;
    console.log("isMouseOver" + this.isMouseOver)
  }



}
