import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class ApiRestService {
    user: any;
    token: string;
    httpOptions: any;
    private url = 'http://localhost:8000/api';

    constructor(private http: HttpClient) {}

    public login(params: any) {
        return this.http.post(`${this.url}/login`, params);
    }

    public addUser(params: any, token) {
      return this.http.post(`${this.url}/user`, params, this.getHeaders(token));
    }

  public updateUser(params: any, token) {
    return this.http.put(`${this.url}/user`, params, this.getHeaders(token));
  }

    public getUsers(token: string) {
      return this.http.get(`${this.url}/user`, this.getHeaders(token))
    }

    private getHeaders(token) {
        return this.httpOptions = {
            headers: new HttpHeaders({
                'Authorization': 'Bearer ' + token
            })
        };
    }
}
