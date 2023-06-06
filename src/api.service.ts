import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { LoginUser } from './app/models/user.models';
import { RegisterUser} from './app/models/user.models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  loginUser(user: LoginUser) {
    return this.http.post("http://localhost:8080/auth/login/", user)
  }

  registerUser(user: RegisterUser) {
    return this.http.post("http://localhost:8080/auth/register/", user)
  }

  getExpenses() {
    let keyJwt: String = localStorage.getItem('jwt') || "";
    let headers = new HttpHeaders().set("Authorization", `Bearer ${keyJwt}`)
    return this.http.get("http://localhost:8080/api/expenses/", {headers});
  }
}
