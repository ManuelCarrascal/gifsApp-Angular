import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtomsModule } from '../atoms/atoms.module';
import { SearchFieldComponent } from './search-field/search-field.component';
import { LucideAngularModule, Search } from 'lucide-angular';
import { CardListComponent } from './card-list/card-list.component';
import { CardComponent } from './card/card.component';
import { SharedModule } from "../../shared/shared.module";


@NgModule({
  declarations: [
    SearchFieldComponent,
    CardListComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    AtomsModule,
    LucideAngularModule.pick({ Search }),
    SharedModule
],
  exports: [
    SearchFieldComponent,
    CardListComponent,
    CardComponent
  ]
})
export class MoleculesModule { }
