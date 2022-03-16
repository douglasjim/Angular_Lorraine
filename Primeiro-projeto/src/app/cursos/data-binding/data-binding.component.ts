import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = "http:www.teste.com.br";
  img: string;

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

  

}
