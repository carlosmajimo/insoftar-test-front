import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {Observable} from 'rxjs';
import * as UserActions from '../actions/users.actions';
import { UsersState } from '../reducers/users.reducer';
import {ApiRestService} from './api-rest.service';
import {getUsersListSelector} from '../selectors/users.selector';

interface Response {
  data: Array<any>;
  message: string;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(
    private store: Store<UsersState>,
    private api: ApiRestService,
  ) {}

  public SetUsers(token: string) {
    this.api.getUsers(token).subscribe(
      (value: Response) => {
        const { data } = value;
        this.store.dispatch(UserActions.SetUsers({users: data}))
      },
        error => console.log(error)
    );
  }

  public getUsersList$(): Observable<Array<any>> {
    return this.store.select(getUsersListSelector);
  }
}
