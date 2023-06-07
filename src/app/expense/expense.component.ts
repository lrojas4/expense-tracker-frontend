import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/api.service';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {

  expenses: any;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getExpenses().subscribe(data => {this.expenses = data;
    console.log(data)});
  }
}
