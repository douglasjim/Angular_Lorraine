import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { DataBindingComponent } from './data-binding/data-binding.component';



@NgModule({
  declarations: [
    CursosComponent,
    CursoDetalheComponent,
    DataBindingComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CursosComponent,
    CursoDetalheComponent
  ]
})
export class CursosModule { }
