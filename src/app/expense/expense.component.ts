import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/api.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {

  expenses: any;
  expense: any;
  id:any;

  constructor(private apiService: ApiService, private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.apiService.getExpenses().subscribe(data => {this.expenses = data;
    console.log(data)});

    const isIdPresent = this.activatedRoute.snapshot.paramMap.has('id');
    if (isIdPresent) {
        const id = this.activatedRoute.snapshot.paramMap.get('id');
        this.apiService.getExpense(this.id).subscribe(
          data => this.expense = data 
        )
    }
  }

  deleteExpense(id: number) {
    this.apiService.deleteExpense(id).pipe(
      tap(response => {
        console.log('response', response);
        this.router.navigateByUrl('/user-dashboard');
      })
    ).subscribe();
  }

}