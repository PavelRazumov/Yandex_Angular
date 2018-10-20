import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DzenComponent } from './dzen.component';

describe('DzenComponent', () => {
  let component: DzenComponent;
  let fixture: ComponentFixture<DzenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DzenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DzenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
