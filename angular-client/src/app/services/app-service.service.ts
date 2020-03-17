import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { User } from '../models/user';
import { Observable, EMPTY } from 'rxjs';
import { AppConstant } from '../constants/app-constant';
import { URLSearchParams } from 'url';
import { Role } from '../models/role';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  currentUser: User;
  constructor(private httpClient: HttpClient) { }

  checkLogin(user: User): Observable<User> {
    const params: HttpParams = new HttpParams()
      .append('email', user.userEmail)
      .append('password', user.password);
    return <Observable<User>>this.httpClient.post(`${AppConstant.API_V1_URL}/checkLogin`, user, { params });
  }

  editUser(updatingUser: User): Observable<User> {
    return <Observable<User>>this.httpClient.put(`${AppConstant.API_V1_URL}/user/${updatingUser.id}`, updatingUser);
  }

  changeUserPassword(oldPassword: string, newPassword: string): Observable<User> {
    let params = new HttpParams()
      .append('oldPassword', oldPassword)
      .append('newPassword', newPassword);
    return <Observable<User>>this.httpClient.put(`${AppConstant.API_V1_URL}/changeUserPassword/${this.currentUser.id}`, {}, { params });
  }

  getAllUser(): Observable<User[]> {
    return this.httpClient.get(`${AppConstant.API_V1_URL}/users`) as Observable<User[]>;
  }

  searchUserByEmail(email: string): Observable<User[]> {
    if (!email || email == '') {
      return this.getAllUser();
    }
    const params = new HttpParams()
      .append('email', email);
    return this.httpClient.get(`${AppConstant.API_V1_URL}/user`, { params }) as Observable<User[]>;
  }

  getAllRole(): Observable<Role[]> {
    return this.httpClient.get(`${AppConstant.API_V1_URL}/role`) as Observable<Role[]>;
  }

  addUsers(users: User[]): Observable<User[]> {
    if (!users || users.length <= 0) {
      return EMPTY;
    }
    return this.httpClient.post(`${AppConstant.API_V1_URL}/users`, users) as Observable<User[]>;
  }


  // findUsersByEmail(email: string): Observable<User[]> {
  //   const params: HttpParams = new HttpParams().append('email', email);
  //   return this.httpClient.get(`${AppConstant.API_V1_URL}/user`, { params }) as Observable<User[]>;
  // }

  private buildHttpOptions() {
    let httpParams = new HttpParams();
    httpParams.append('email', 'a');
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application-json' }), httpParams };
    let httpParamsOption = { email: 'email', password: 'password' };
    return httpOptions;
  }
}
