import { Component } from '@angular/core';
import { ApiService } from 'src/api.service';
import { RegisterUser } from '../models/user.models';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private apiService: ApiService){}

  user : RegisterUser = {name: '', email: '', password: ''};

  onSubmit(){
    this.apiService.registerUser(this.user).subscribe((data : any) => {localStorage.setItem('jwt',data.message);
    console.log(localStorage)} )
  }
}
