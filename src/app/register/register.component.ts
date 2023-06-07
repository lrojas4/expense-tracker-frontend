import { Component } from '@angular/core';
import { ApiService } from 'src/api.service';
import { RegisterUser } from '../models/user.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private apiService: ApiService, private router: Router){}

  user : RegisterUser = {name: '', email: '', password: ''};

  onSubmit(){
    this.apiService.registerUser(this.user).subscribe((data : any) => {
      localStorage.setItem('jwt',data.message);
      console.log(localStorage);
      this.router.navigate(['/login']);
    });
  }
}
