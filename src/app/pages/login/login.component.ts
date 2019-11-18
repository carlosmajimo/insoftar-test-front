import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { ApiRestService } from '../../services/api-rest.service';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  User: any;
  LoginForm: FormGroup;
  Email: string;
  Password: string;
  Alert: string;

  constructor(
    private apiRest: ApiRestService,
    private router: Router,
    private auth: AuthService
  ) {
    this.Alert = '';
    this.LoginForm = new FormGroup({
      email: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.email
        ])
      ),
      password: new FormControl(
        '',
        Validators.required
      ),
    });
  }

  ngOnInit() {
  }
  ngOnDestroy() {
  }

  get f() { return this.LoginForm; }

  login() {
    this.apiRest.login({email: this.Email, password: this.Password}).subscribe(
      (response: any) => {
        const { user, token } = response;
        this.auth.Login({user, token});
        this.router.navigate(['dashboard']).then();
        localStorage.setItem('token', token);
      },
      (error) => this.Alert = error.error.message
    );
  }

}
