import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { miAuthGuard } from './guards/salud-nutricion-app.guard';

import { InicioSesionComponent } from './pages/usuario/inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from './pages/usuario/registro/registro.component';
import { InformacionPersonalComponent } from './pages/usuario/informacion-personal/informacion-personal.component';
import { ConsejoDiarioComponent } from './pages/consejo/consejo-diario/consejo-diario.component';
import { ComidasDiariasComponent } from './pages/comida/comidas-diarias/comidas-diarias.component';
import { ListadoAlimentosComponent } from './pages/comida/listado-alimentos/listado-alimentos.component';

const routes: Routes = [
  {
    path: 'inicio-sesion',
    component: InicioSesionComponent
  },
  {
    path: 'registro',
    component: RegistroComponent
  },
  {
    path: 'informacion-personal',
    component: InformacionPersonalComponent,
    canActivate: [miAuthGuard]
  },
  {
    path: 'consejo-diario',
    component: ConsejoDiarioComponent,
    canActivate: [miAuthGuard]
  },
  {
    path: 'comidas-diarias',
    component: ComidasDiariasComponent,
    canActivate: [miAuthGuard]
  },
  {
    path: 'listado-alimentos',
    component: ListadoAlimentosComponent,
    canActivate: [miAuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
