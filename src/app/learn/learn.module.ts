import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LearnComponent } from './learn/learn.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: LearnComponent}
]

@NgModule({
  declarations: [LearnComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class LearnModule { }
