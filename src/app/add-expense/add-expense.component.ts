import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/api.service';
import { Expense } from '../models/expense.models';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent {
  expense: Expense = {date: new Date(), amount:0, description: ''}
  id: any;

  constructor(private apiService: ApiService, private router: Router){}

  addExpense() {
    console.log(this.expense)
    this.apiService.addExpense(this.expense).subscribe(
      data => {
        console.log(data);
        this.router.navigateByUrl("/user-dashboard");
      }
    )
  }
}
