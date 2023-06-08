import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs';
import { ApiService } from 'src/api.service';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})
export class IncomeComponent implements OnInit {

  incomes: any;
  income: any;
  id:any;

  constructor(private apiService: ApiService, private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.apiService.getIncomes().subscribe((data:any) => {this.incomes = data;
      console.log(data)});

    const isIdPresent = this.activatedRoute.snapshot.paramMap.has('id');
      if (isIdPresent) {
        const id = this.activatedRoute.snapshot.paramMap.get('id');
        this.apiService.getIncome(this.id).subscribe(
        data => this.income = data 
        )
      }
  }

  deleteIncome(id: number) {
    this.apiService.deleteIncome(id).pipe(
      tap((response: any) => {
        console.log('response', response);
        this.router.navigateByUrl('/incomes');
      })
    ).subscribe();
  }

}
