import { Component } from '@angular/core';
import { LoginUser } from '../models/user.models';
import { ApiService } from 'src/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private apiService: ApiService, private router: Router){}

  user : LoginUser = {email: '', password: ''};

  onSubmit(){
    this.apiService.loginUser(this.user).subscribe((data : any) => { 
    localStorage.setItem('jwt',data.message);
    console.log(localStorage);
    this.router.navigate(['/user-dashboard']);
    });
  }
}
