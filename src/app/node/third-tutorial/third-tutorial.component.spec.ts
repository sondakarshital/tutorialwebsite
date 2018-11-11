import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdTutorialComponent } from './third-tutorial.component';

describe('ThirdTutorialComponent', () => {
  let component: ThirdTutorialComponent;
  let fixture: ComponentFixture<ThirdTutorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdTutorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
