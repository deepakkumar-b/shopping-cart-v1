import { Component, OnInit } from '@angular/core';
import { ItemResponse, ItemHomeResponse } from '../app.interface';
import { AppService } from '../app.service';

@Component({
  selector: 'app-sample-items-home',
  templateUrl: './sample-items-home.component.html',
  styleUrls: ['./sample-items-home.component.css']
})
export class SampleItemsHomeComponent implements OnInit {
  counterValue: number = 0;
  maxValue: number = 0;
  itemResponse: ItemHomeResponse;
  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.getItemsForHome().subscribe( response => {
      console.log(response);
      this.itemResponse = response;
    }, error => {
      console.log(error);
    });
  }

  increment(maxQuantity: number) {
    console.log(maxQuantity);
    if(this.counterValue < maxQuantity) {
      this.counterValue++;
    }
    
  }

  decrement(maxQuantity: number) {
    if(this.counterValue <= maxQuantity && this.counterValue > 0) {
      this.counterValue--;
    }
  }
}
