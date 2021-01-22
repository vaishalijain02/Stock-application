import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: WelcomeComponent },
  {
    path: 'learn',
    loadChildren: () => import('./learn/learn.module').then(m => m.LearnModule)
  },
  {
    path: 'stocks',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'statisticalAnalysis',
    loadChildren: () => import('./statistical-model/statistical-model.module').then(m => m.StatisticalModelModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
