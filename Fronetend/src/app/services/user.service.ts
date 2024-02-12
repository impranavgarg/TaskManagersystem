import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = "http://localhost:8080/user";

  constructor(private httpClient: HttpClient) { }

  register(user: User): Observable<User> {
    return this.httpClient.post<User>(`${this.baseUrl}/register`, user);
  }

  login(user: User): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/login`, user);
  }
}
