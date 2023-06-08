import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/api.service';
import { Income } from '../models/income.models';

@Component({
  selector: 'app-add-income',
  templateUrl: './add-income.component.html',
  styleUrls: ['./add-income.component.css']
})
export class AddIncomeComponent {

  income: Income = {income_amount: 0}
  id: any;

  constructor(private apiService: ApiService, private router: Router){}

  addIncome() {
    this.apiService.addIncome(this.income).subscribe(
      data => {
        console.log(data);
        this.router.navigateByUrl("/user-dashboard");
      }
    )
  }
}
