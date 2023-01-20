import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutDetsComponent } from './tut-dets.component';

describe('TutDetsComponent', () => {
  let component: TutDetsComponent;
  let fixture: ComponentFixture<TutDetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutDetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutDetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
