import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticalComponent } from './statistical/statistical.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: StatisticalComponent}
]

@NgModule({
  declarations: [StatisticalComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [RouterModule]
})
export class StatisticalModelModule { }
