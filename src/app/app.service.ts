import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ItemResponse, ItemHomeResponse } from './app.interface';
import { ItemHomeComponent } from './item-home/item-home.component';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  flickerUrl = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1';
  itemsUrl = 'http://localhost:3000/items';

  constructor(private http: HttpClient) { }
  
  getPhotos(): Observable<ItemResponse> {
    return this.http.get<ItemResponse>(this.flickerUrl);
  }

  getItemsForHome(): Observable<ItemHomeResponse> {
    return this.http.get<ItemHomeResponse>(this.itemsUrl);
  }
}