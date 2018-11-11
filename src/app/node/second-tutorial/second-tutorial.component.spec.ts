import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondTutorialComponent } from './second-tutorial.component';

describe('SecondTutorialComponent', () => {
  let component: SecondTutorialComponent;
  let fixture: ComponentFixture<SecondTutorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondTutorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
