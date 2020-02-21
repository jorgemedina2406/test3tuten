import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimezoneRoutingModule } from './timezone-routing.module';
import { TimezoneComponent } from './timezone.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TimezoneComponent
  ],
  imports: [
    CommonModule,
    TimezoneRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TimezoneModule { }
