import { Component, OnInit } from '@angular/core';
import { ItemResponse } from '../app.interface';
import { AppService } from '../app.service';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  itemResponse: ItemResponse;
  constructor(private appService: AppService) { }
  ngOnInit() {
    this.appService.getPhotos().subscribe( response => {
      this.itemResponse = response;
    }, error => {
      console.log(error);
    });
  }

}
