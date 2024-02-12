import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root' 
})
export class AuthService {
  private baseUrl = "http://localhost:8080/user";
  private isAuthenticated = false;
  private authSecretKey = 'Bearer Token';

  constructor(private httpClient: HttpClient) {
    if (typeof localStorage !== 'undefined') {
      this.isAuthenticated = !!localStorage.getItem(this.authSecretKey);
    }
  }

 
  register(user: User): Observable<User> {
    console.log(user);
    
    return this.httpClient.post<User>(`${this.baseUrl}/register`, user);
  }

  login(user: User): Observable<any> { 
    return this.httpClient.post(`${this.baseUrl}/login`, user);
  }


  setAuthentication(authToken: string, username: string) {
    localStorage.setItem(this.authSecretKey, authToken);
    localStorage.setItem('username', username);
    this.isAuthenticated = true; 
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }

  logout(): void {
    localStorage.removeItem(this.authSecretKey);
    localStorage.removeItem('username'); 
    this.isAuthenticated = false;
  }
}
