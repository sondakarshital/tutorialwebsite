import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpressJsComponent } from './express-js.component';

describe('ExpressJsComponent', () => {
  let component: ExpressJsComponent;
  let fixture: ComponentFixture<ExpressJsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpressJsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpressJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
