import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { InscrevaComponent } from './pages/inscreva/inscreva.component';
import { DesafiosComponent } from './pages/desafios/desafios.component';
import { CronogramaComponent } from './pages/cronograma/cronograma.component';
import { PremiacaoComponent } from './pages/premiacao/premiacao.component';
import { RegulamentoComponent } from './pages/regulamento/regulamento.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InscrevaComponent,
    DesafiosComponent,
    CronogramaComponent,
    PremiacaoComponent,
    RegulamentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
