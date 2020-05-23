import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContractorListComponent } from './contractor-list/contractor-list.component';
import { AuthGuard } from 'src/app/utils/guards/auth.guard'
import {Contractor} from 'src/app/contractor';
const routes: Routes = [
  {
    path: 'contractor-list',
    component: ContractorListComponent,
    data: { title: 'View Contractors' },
    canActivate: [AuthGuard],
  },
  {
    path: '',
    redirectTo: 'contractor-list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractorRoutingModule { }
