import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CronogramaComponent } from './pages/cronograma/cronograma.component';
import { DesafiosComponent } from './pages/desafios/desafios.component';
import { HomeComponent } from './pages/home/home.component';
import { InscrevaComponent } from './pages/inscreva/inscreva.component';
import { PremiacaoComponent } from './pages/premiacao/premiacao.component';
import { RegulamentoComponent } from './pages/regulamento/regulamento.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'inscreva-se', component: InscrevaComponent },
  { path: 'desafios', component: DesafiosComponent },
  { path: 'cronograma', component: CronogramaComponent },
  { path: 'premiacao', component: PremiacaoComponent },
  { path: 'regulamento', component: RegulamentoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
