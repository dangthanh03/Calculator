import { Component, inject, computed  } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { InvestmentService } from '../investment.service';
@Component({
  selector: 'app-investment-results',
   
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  // results = input()
 private investmentService= inject(InvestmentService)
   
  results = computed(()=> this.investmentService.resultData());
 
}