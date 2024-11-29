import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganismsModule } from '../organisms/organisms.module';
import { MainTemplateComponent } from './main-template/main-template.component';
import { SharedModule } from "../../shared/shared.module";
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MainTemplateComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    OrganismsModule,
    SharedModule
],
  exports: [
    MainTemplateComponent
  ]
})
export class TemplatesModule { }
