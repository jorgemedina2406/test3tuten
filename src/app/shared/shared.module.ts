import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderAdminComponent } from './header-admin/header-admin.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    NopagefoundComponent,
    HeaderAdminComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  exports: [
    HeaderAdminComponent
  ],
  bootstrap: [],
  entryComponents: []

})
export class SharedModule { }
