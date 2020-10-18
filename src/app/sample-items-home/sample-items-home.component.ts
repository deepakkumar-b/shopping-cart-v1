import { Component, OnInit } from '@angular/core';
import { ItemResponse, ItemHomeResponse } from '../app.interface';
import { AppService } from '../app.service';

@Component({
  selector: 'app-sample-items-home',
  templateUrl: './sample-items-home.component.html',
  styleUrls: ['./sample-items-home.component.css']
})
export class SampleItemsHomeComponent implements OnInit {
  counterValue: Map<number, number> = new Map<number, number>();
  maxCount: Map<number, number> = new Map<number, number>();
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

  increment(itemId:number, maxQuantity: number) {
    let itemCount = 0;
    if(this.counterValue.has(itemId)) {
      itemCount = this.counterValue.get(itemId);
    }
    if(itemCount < maxQuantity) {
      itemCount++;
      this.counterValue.set(itemId, itemCount);
    }    
  }

  decrement(itemId: number, maxQuantity: number) {
    let itemCount = 0;
    if(this.counterValue.has(itemId)) {
      itemCount = this.counterValue.get(itemId);
    }
    if(itemCount > 0) {
      itemCount--;
      this.counterValue.set(itemId, itemCount);
    }  
    
  }

  getCounterValue(itemId: number): number { 
    if(this.counterValue.has(itemId)) {
      console.log(this.counterValue.get(itemId));
      return this.counterValue.get(itemId);
    } else {
      return 0;
    }
    
  }
}
