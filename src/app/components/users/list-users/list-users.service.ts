import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Injectable()
export class ListUsersService {

  constructor(private http:HttpClient) { }

  getAllUsers() {
    return this.http.get(environment.url + environment.users);
  }

}