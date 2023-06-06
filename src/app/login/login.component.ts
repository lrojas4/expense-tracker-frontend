import { Component } from '@angular/core';
import { LoginUser } from '../models/user.models';
import { ApiService } from 'src/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private apiService: ApiService){}

  user : LoginUser = {email: '', password: ''};

  onSubmit(){
    this.apiService.loginUser(this.user).subscribe((data : any) => {localStorage.setItem('jwt',data.message);
    console.log(localStorage)} )
  
  }
}
