import { Component, ViewChild, ContentChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-yandex';

  @ViewChild("dzen")
  public dzen: any;

  @ContentChild("qwe")
  contentChild: any;

  constructor(){

  }

  ngOnInit(){

  }

  ngAfterViewInit(){
    //dzen.
  }
}
