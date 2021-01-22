import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    private _isLoggedIn = false;
    public isLoggedInSub : Subject<boolean> = new Subject();

  constructor() { }

  isLoggedIn() {
      return this._isLoggedIn;
  }

  login() {
      this._isLoggedIn = true;
      this.isLoggedInSub.next(this._isLoggedIn);
  }

  logout() {
      this._isLoggedIn = false;
      this.isLoggedInSub.next(this._isLoggedIn)
  }
}