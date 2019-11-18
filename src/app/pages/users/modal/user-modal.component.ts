import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { User } from '../users.component';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiRestService} from '../../../services/api-rest.service';
import {UsersService} from '../../../services/users.service';

@Component({
  selector: 'user-modal-content',
  templateUrl: './user-modal.component.html'
})
export class UserModalComponent implements OnInit {
  @Input() name;
  @Input() type;
  @Input() user: User;
  UserForm: FormGroup;
  Token: string;
  Alert: string;

  constructor(
    private apiService: ApiRestService,
    private usersService: UsersService,
    public activeModal: NgbActiveModal
  ) {
    this.UserForm = new FormGroup({
      firstName: new FormControl(
        '',
        Validators.required
      ),
      lastName: new FormControl(
        '',
        Validators.required
      ),
      email: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
        ])
      ),
      phone: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('[0-9]+')
        ])
      ),
      identification: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('[0-9]+')
        ])
      ),
      password: new FormControl(
        ''
      )
    });
    this.Token = localStorage.getItem('token');
  }

  ngOnInit() {
    if(this.user) {
      this.f.email.disable();
      this.f.identification.disable();
    }
  }

  get f() { return this.UserForm.controls; }

  sendRequest() {
    const userData: User = {
      first_name: this.f.firstName.value,
      last_name: this.f.lastName.value,
      email: this.f.email.value,
      phone: this.f.phone.value,
      identification: this.f.identification.value,
      password: this.f.password.value
    };

    if(this.user) userData.id = this.user.id;

    if(this.type === 0) {
      this.apiService.addUser({...userData}, this.Token).subscribe(
        () => {
          this.usersService.SetUsers(this.Token);
          this.activeModal.close('Close click')
        },
        error => {
          this.Alert = error.error.message
        }
      );
    } else {
      this.apiService.updateUser({...userData}, this.Token).subscribe(
        () => {
          this.usersService.SetUsers(this.Token);
          this.activeModal.close('Close click')
        },
        error => {
          this.Alert = error.error.message
        }
      );
    }
  }
}
