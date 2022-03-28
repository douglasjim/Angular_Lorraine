import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';
import { MeuFormComponent } from '../meu-form/meu-form.component';
import { MeuFormModule } from '../meu-form/meu-form.module';



@NgModule({
  declarations: [
    CursosComponent,
    CursoDetalheComponent,
    DataBindingComponent,
    //MeuFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MeuFormModule
  ],
  exports:[
    CursosComponent,
    CursoDetalheComponent
  ]
})
export class CursosModule { }
