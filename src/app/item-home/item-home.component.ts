import { Component, OnInit } from '@angular/core';
import { ItemResponse } from '../app.interface';
import { AppService } from '../app.service';

@Component({
  selector: 'app-item-home',
  templateUrl: './item-home.component.html',
  styleUrls: ['./item-home.component.css']
})
export class ItemHomeComponent implements OnInit {

  itemResponse: ItemResponse;
  constructor(private appService: AppService) { }
  ngOnInit() {}

}
