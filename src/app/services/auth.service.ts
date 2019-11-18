import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {Observable} from 'rxjs';
import * as AuthActions from '../actions/auth.actions';
import {getTokenSelector, getUserSelector} from '../selectors/auth.selector';
import { AuthState } from '../reducers/auth.reducer';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private store: Store<AuthState>) {}

  public Login(user: any) {
    this.store.dispatch(AuthActions.Login(user))
  }

  public getUser$(): Observable<any> {
    return this.store.select(getUserSelector);
  }

  public getToken$(): Observable<string> {
    return this.store.select(getTokenSelector);
  }
}
