import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { AppConstant } from '../constants/app-constant';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  currentUser: User;
  constructor(private httpClient: HttpClient) { }

  checkLogin(user: User): Observable<User> {
    return <Observable<User>>this.httpClient.post(`${AppConstant.API_V1_URL}/checkLogin`, user);
  }

  changeUserEmail(changeUserEmail: string): Observable<User> {
    let updatingUser = Object.assign(this.currentUser, { userEmail: changeUserEmail });
    return <Observable<User>>this.httpClient.put(`${AppConstant.API_V1_URL}/user/${this.currentUser.id}`, updatingUser);
  }

  private buildHttpOptions() {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application-json' }) };
    // let httpParamsOption = { email: email, password: password };
    return httpOptions;
  }
}
