import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ItemResponse } from './app.interface';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  flickerUrl = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1';
  constructor(private http: HttpClient) { }
  getPhotos(): Observable<ItemResponse> {
    return this.http.get<ItemResponse>(this.flickerUrl);
  }
}