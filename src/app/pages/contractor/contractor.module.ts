import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractorRoutingModule } from './contractor-routing.module';
import { ContractorListComponent } from './contractor-list/contractor-list.component';


@NgModule({
  declarations: [ContractorListComponent],
  imports: [
    CommonModule,
    ContractorRoutingModule
  ]

})
export class ContractorModule { }
