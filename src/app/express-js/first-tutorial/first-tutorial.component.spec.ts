import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EFirstTutorialComponent } from './first-tutorial.component';

describe('FirtstTutorialComponent', () => {
  let component: EFirstTutorialComponent;
  let fixture: ComponentFixture<EFirstTutorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EFirstTutorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EFirstTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
