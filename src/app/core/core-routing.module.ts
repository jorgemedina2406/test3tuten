import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { LoginComponent } from '../login/login.component';
import { LoginGuardGuard } from '../services/guards/login-guards.guard';

const routes: Routes = [
    { path: '', component: LoginComponent },
    {
        path: 'info',
        component: AdminLayoutComponent,
        canActivate: [LoginGuardGuard],
        children: [
        {
          path: 'usuario',
          loadChildren: () => import('../info/info.module').then(mod => mod.InfoModule)
        },
        {
          path: 'timezone',
          loadChildren: () => import('../timezone/timezone.module').then(mod => mod.TimezoneModule)
        },
      ]
    },
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
