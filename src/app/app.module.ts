import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NewsComponent } from './news/news.component';
import { HttpModule } from '@angular/http';
import { NewsGeoComponent } from './news-geo/news-geo.component';
import { SearchComponent } from './search/search.component';
import { WidgetComponent } from './widget/widget.component';
import { WidgetWeatherComponent } from './widget/widget-weather/widget-weather.component';
import { WidgetTrafficComponent } from './widget/widget-traffic/widget-traffic.component';
import { WidgetMapComponent } from './widget/widget-map/widget-map.component';
import { TvComponent } from './widget/tv/tv.component';
import { AfishaComponent } from './widget/afisha/afisha.component';
import { VisitedComponent } from './widget/visited/visited.component';
import { DzenComponent } from './dzen/dzen.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewsComponent,
    NewsGeoComponent,
    SearchComponent,
    WidgetComponent,
    WidgetWeatherComponent,
    WidgetTrafficComponent,
    WidgetMapComponent,
    TvComponent,
    AfishaComponent,
    VisitedComponent,
    DzenComponent
  ],
  imports: [
    BrowserModule, HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
