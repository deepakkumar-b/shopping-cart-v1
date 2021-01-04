import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { zip } from 'rxjs';
import { ItemResponse, ItemHomeResponse } from '../app.interface';
import { AppService } from '../app.service';
import { AddProductToCartAction } from '../store/shopping-cart.actions';

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
  constructor(private appService: AppService, private store$: Store) { }

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
      return this.counterValue.get(itemId);
    } else {
      return 0;
    }
  }

  addToCart(item: ItemHomeResponse): void {
    console.log("Event");
    console.log(item);

    // calculate totalPrice before adding to cart
  const totalPrice = item.new_price * this.getCounterValue(item.id);
    this.store$.dispatch(new AddProductToCartAction(item));
    // console.log($event);
  }

}
