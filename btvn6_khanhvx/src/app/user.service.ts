import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = "http://localhost:3000"
  constructor(private http: HttpClient) { }

  getUserById(id:number): Observable<any> {
    return this.http.get(this.apiUrl + "user?id=" + id);
  }

  login(username: string, password: string): Observable<any>{
    const url = this.apiUrl + "/login?username=" + username +"&password=" + password
    return this.http.get(url);
  }

  register(user:any): Observable<any>{
    const url = this.apiUrl + "/register?username=" + user.username + 
    "&password=" + user.password + 
    "&age=" + user.age + 
    "&date_of_birth=" + user.date_of_birth +
    "&country=" + user.country;
    return this.http.post(url, {});
  }
}
