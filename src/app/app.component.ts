import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'stock-app';
  public isMenuCollapsed = true;
  public isLoggedIn: boolean = false;

  constructor(public authService: AuthService, private router: Router){}

  login() {
    this.authService.login();
    this.isLoggedIn = true;
    this.router.navigateByUrl('/login');
  }

  logout() {
    this.authService.logout();
    this.isLoggedIn = false;
  }
  
}
