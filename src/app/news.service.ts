import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class NewsService {


  constructor(private http : Http) { }

  getTitles() {
     
      return this.http.get('../assets/json/posts.json').pipe(map(response => response.json()))
      .pipe(map(response => response.posts))
      .pipe(map(title => title));
    }
}