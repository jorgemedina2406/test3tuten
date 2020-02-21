import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoRoutingModule } from './info-routing.module';
import { InfoComponent } from './info.component';
import { FilterPipe } from '../services/pipes/filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    InfoComponent,
    FilterPipe,
  ],
  imports: [
    CommonModule,
    InfoRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class InfoModule { }
