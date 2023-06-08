import { Component, Input } from '@angular/core';
import { Expense } from '../models/expense.models';
import { ApiService } from 'src/api.service';


@Component({
  selector: 'app-update-expense',
  templateUrl: './update-expense.component.html',
  styleUrls: ['./update-expense.component.css']
})
export class UpdateExpenseComponent {
  @Input() expense: Expense = {date: new Date(), amount:0, description:''};

  constructor(private apiService: ApiService){}

  updateExpense() {
    this.apiService.updateExpense(this.expense).subscribe(
      data => {
        console.log(data, 0);
      }
    )
  }

}
