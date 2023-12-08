import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { RodapeComponent } from './components/rodape/rodape.component';
import { FormularioInscricaoComponent } from './components/formulario-inscricao/formulario-inscricao.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BannerComponent } from './components/banner/banner.component'


@NgModule({
  declarations: [
    CabecalhoComponent,
    RodapeComponent,
    FormularioInscricaoComponent,
    BannerComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    CabecalhoComponent,
    RodapeComponent,
    FormularioInscricaoComponent
  ]
})
export class SharedModule { }
