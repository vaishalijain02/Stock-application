import { AuthGuard } from './../auth.guard';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelListComponent } from './model-list/model-list.component';
import { ModelViewComponent } from './model-view/model-view.component';
import { RouterModule, Routes } from '@angular/router';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/search.pipe';

const routes: Routes = [
  {path: 'detail/:id', component: ModelViewComponent, canActivate: [AuthGuard]}
]


@NgModule({
  declarations: [ModelListComponent, ModelViewComponent, FilterPipe],
  imports: [
    CommonModule,
    TabsModule.forRoot(),
    RouterModule.forChild(routes),
    FormsModule
  ],
  exports: [ModelListComponent, RouterModule]
})
export class SharedModule { }
