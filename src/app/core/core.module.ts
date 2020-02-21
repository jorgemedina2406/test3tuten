import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ServiceModule } from '../services/service.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from '../login/login.component';

@NgModule({
  declarations: [
    AdminLayoutComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoreRoutingModule,
    ServiceModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    RouterModule
],
})
export class CoreModule { }
