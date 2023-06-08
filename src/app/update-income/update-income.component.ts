import { Component, Input } from '@angular/core';
import { Income } from '../models/income.models';
import { ApiService } from 'src/api.service';

@Component({
  selector: 'app-update-income',
  templateUrl: './update-income.component.html',
  styleUrls: ['./update-income.component.css']
})
export class UpdateIncomeComponent {
  @Input() income: Income = {income_amount:0};

  constructor(private apiService: ApiService){}

  updateIncome() {
    this.apiService.updateIncome(this.income).subscribe(
      data => {
        console.log(data);
      }
    )
  }

}
