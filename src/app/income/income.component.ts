import { Component, OnInit} from '@angular/core';
import { ApiService } from 'src/api.service';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})
export class IncomeComponent implements OnInit {

  incomes: any;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getIncomes().subscribe((data:any) => {this.incomes = data;
      console.log(data)});
  }

}
