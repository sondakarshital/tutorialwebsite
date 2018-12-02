import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ESecondTutorialComponent } from './second-tutorial.component';

describe('SecondTutorialComponent', () => {
  let component: ESecondTutorialComponent;
  let fixture: ComponentFixture<ESecondTutorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ESecondTutorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ESecondTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
