import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsGeoComponent } from './news-geo.component';

describe('NewsGeoComponent', () => {
  let component: NewsGeoComponent;
  let fixture: ComponentFixture<NewsGeoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsGeoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsGeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
