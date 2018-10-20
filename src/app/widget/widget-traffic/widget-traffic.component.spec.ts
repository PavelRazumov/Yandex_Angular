import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetTrafficComponent } from './widget-traffic.component';

describe('WidgetTrafficComponent', () => {
  let component: WidgetTrafficComponent;
  let fixture: ComponentFixture<WidgetTrafficComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetTrafficComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetTrafficComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
