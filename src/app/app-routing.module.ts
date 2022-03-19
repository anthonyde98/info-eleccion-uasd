import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'inicio',
    loadChildren: () => import('./components/inicio/inicio.module').then( m => m.InicioModule)
  },
  {
    path: 'resultado',
    loadChildren: () => import('./components/resultado/resultado.module').then( m => m.ResultadoModule)
  },
  {path: '**', pathMatch: 'full', redirectTo: 'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
