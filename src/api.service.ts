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

  getExpense(id: number) {
    let keyJwt: String = localStorage.getItem('jwt') || "";
    let headers = new HttpHeaders().set("Authorization", `Bearer ${keyJwt}`)
    return this.http.get(`http://localhost:8080/api/expenses/${id}/`, {headers});
  }

  addExpense(expense: any) {
    let keyJwt: String = localStorage.getItem('jwt') || "";
    let headers = new HttpHeaders().set("Authorization", `Bearer ${keyJwt}`)
    return this.http.post("http://localhost:8080/api/expenses/", expense, {headers});
  }

  updateExpense(expense: any) {
    let keyJwt: String = localStorage.getItem('jwt') || "";
    let headers = new HttpHeaders().set("Authorization", `Bearer ${keyJwt}`)
    return this.http.put(`http://localhost:8080/api/expenses/${expense.id}/`, expense, {headers});
  }

  deleteExpense(id: number) {
    let keyJwt: String = localStorage.getItem('jwt') || "";
    let headers = new HttpHeaders().set("Authorization", `Bearer ${keyJwt}`)
    return this.http.delete(`http://localhost:8080/api/expenses/${id}/`, {headers});
  }

  getIncomes() {
    let keyJwt: String = localStorage.getItem('jwt') || "";
    let headers = new HttpHeaders().set("Authorization", `Bearer ${keyJwt}`)
    return this.http.get("http://localhost:8080/api/incomes/", {headers});
  }

  addIncome(income: any) {
    let keyJwt: String = localStorage.getItem('jwt') || "";
    let headers = new HttpHeaders().set("Authorization", `Bearer ${keyJwt}`)
    return this.http.post("http://localhost:8080/api/expenses/", {income}, {headers});
  }

  updateIncome(id: number, income: any) {
    let keyJwt: String = localStorage.getItem('jwt') || "";
    let headers = new HttpHeaders().set("Authorization", `Bearer ${keyJwt}`)
    return this.http.put(`http://localhost:8080/api/expenses/${id}`, {income}, {headers});
  }

  deleteIncome(id: number) {
    let keyJwt: String = localStorage.getItem('jwt') || "";
    let headers = new HttpHeaders().set("Authorization", `Bearer ${keyJwt}`)
    return this.http.delete(`http://localhost:8080/api/expenses/${id}`, {headers});
  }
}
