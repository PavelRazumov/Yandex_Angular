import { Component, OnInit, Input } from '@angular/core';
import { NewsService } from '../news.service';
import { NewsGeoService } from '../news-geo.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  public titles:string[] = [];
  
  newsGlobal: boolean = true;
  newsGeo: boolean = false;
 // todayDate: Date; 
  // geo : string = 'now';
  data;
  time;
  month: string;
  day: number;
  year: number;
  r: string;
  constructor(private newsService: NewsService, private newsGeoService: NewsGeoService) { }

  public getGeoNews(): void {
    this.newsGeo = true;
    this.newsGlobal = false;
   // console.log(this.newsGeo);
    this.titles = this.newsGeoService.getTitles();
  }

  GetGeoGlobal() {
    this.newsGlobal = true;
    this.newsGeo = false;
    this.newsService.getTitles().subscribe(articles => {
      this.titles = articles;
    });
  }
  
  ToRussian(month, day, year, r) {
    if (month == 'Oct') {
      this.month = 'октября';
    }
    if ( r == 'Tue') {
      this.r = 'вторник';
    }

    else if (r == 'Wed') {
      this.r = 'среда';
    }
    this.day = +day;
    this.year = +year;
    
  }

  
  ngOnInit() {
    this.newsService.getTitles().subscribe(articles => {
      this.titles = articles;
      
      setInterval( (h, m) => { 
          this.data = new Date();     
          //console.log(this.data);
          h = this.data.toString().split(' ')[4].split(':')[0];
          m = this.data.toString().split(' ')[4].split(':')[1];
          this.time = h + ':' + m;
          this.data = this.data.toString().split(' ').splice(0, 4);//.join(' ');
          console.log(this.data);
          this.ToRussian(this.data[1], this.data[2], this.data[3], this.data[0]);
      }, 1000);
      
    });
  }


}
