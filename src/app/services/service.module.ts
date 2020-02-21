import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginGuardGuard } from './guards/login-guards.guard';

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    LoginGuardGuard
  ]
})
export class ServiceModule { }
