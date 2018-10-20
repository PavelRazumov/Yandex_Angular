import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import {Http} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http : Http) { }
  getWeather() {
     
    return this.http.get('../assets/json/weather.json').pipe(map(response => response.json()))
    .pipe(map(response => response.widget))
    .pipe(map( u => {
      return {
        path: u.image.src,
        morning : u.text.morning,
        afternoon : u.text.afternoon,
        evening : u.text.evening
      }
    }));
  }
}
