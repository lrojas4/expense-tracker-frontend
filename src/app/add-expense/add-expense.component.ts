import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/api.service';
import { Expense } from '../models/expense.models';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent {
  expense: Expense = {date: new Date(), amount:0, description: ''}
  id: any;

  constructor(private apiService: ApiService, private router: Router, private activatedRoute: ActivatedRoute){}

  addExpense() {
    console.log(this.expense)
    this.apiService.addExpense(this.expense).subscribe(
      data => {
        console.log(data, 3);
        this.router.navigateByUrl("/user-dashboard");
      }
    )
  }
}
