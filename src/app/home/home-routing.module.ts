import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { WelcomeComponent } from '../share/components/welcome/welcome.component';
import { ManagerComponent } from '../share/components/manager/manager.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'welcome',   // Ruta para el WelcomeComponent
        component: WelcomeComponent,
      },
      {
        path: 'manager',   // Ruta para el ManagerComponent
        component: ManagerComponent,
      },
      {
        path: '',   // Redirigir a 'welcome' por defecto
        redirectTo: 'welcome',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class HomePageRoutingModule {}
