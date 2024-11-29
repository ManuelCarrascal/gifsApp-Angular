import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomeComponent } from '../../modules/home/home.component';
import { MoleculesModule } from "../../ui/molecules/molecules.module";


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    MoleculesModule
]
})
export class HomePageModule { }
