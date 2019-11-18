import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../services/users.service';
import {Observable} from 'rxjs';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {UserModalComponent} from './modal/user-modal.component';
import {ApiRestService} from '../../services/api-rest.service';

export interface User {
  id?: number;
  first_name: string;
  last_name: string;
  email: string;
  identification: string;
  phone: string;
  password?: string;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  Token: string;
  Users: Observable<Array<User>>;
  constructor(
    private apiService: ApiRestService,
    private usersService: UsersService,
    private modalService: NgbModal
  ) {
    this.Token = localStorage.getItem('token');
    this.Users = this.usersService.getUsersList$();
  }

  ngOnInit() {
    this.usersService.SetUsers(this.Token);
  }

  openModal(type: number, userInfo?: User) {
    const modalRef = this.modalService.open(UserModalComponent, {size: 'lg'});
    modalRef.componentInstance.name = 'World';
    modalRef.componentInstance.type = type;
    if(userInfo) modalRef.componentInstance.user = userInfo;
  }
}
