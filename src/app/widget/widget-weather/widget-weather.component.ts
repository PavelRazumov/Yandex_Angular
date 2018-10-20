import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from '../../weaher.service';

@Component({
  selector: 'app-widget-weather',
  templateUrl: './widget-weather.component.html',
  styleUrls: ['./widget-weather.component.css']
})
export class WidgetWeatherComponent implements OnInit {

  title = 'Погода';
  temper_night;
  temper_morn;
  temper_afternoon;
  time;
  path;
  temper;
  task1;
  task2;
 // @Input() ;
  constructor(private weatherService : WeatherService) { }

  ngOnInit() {

    this.weatherService.getWeather().subscribe(info => {
        console.log(info),
        this.path = info.path,
        this.temper_afternoon = info.afternoon,
        this.temper_morn = info.morning,
        this.temper_night = info.evening; 
        
    })

    setInterval( (d) => { 
      d = new Date();     
      
      this.time = d.toString().split(' ')[4].split(':')[0];
    }, 1000);

    function setTimeOfDay () {
        if (+this.time >= 4 && this.time <= 10 ) {
          return this.timeOfDay = ['this.temper_morn', 'днем', 'вечером'];
        }
        else if (+this.time >= 11 && +this.time <= 15) {
          return this.timeOfDay = [this.temper_afternoon, 'вечером', 'ночью'];
        }

        else if (+this.time >= 16 && +this.time <= 23) {
          return this.timeOfDay = ['this.temper_night',  'утром', 'днем'];
        }
    }
  }

}
