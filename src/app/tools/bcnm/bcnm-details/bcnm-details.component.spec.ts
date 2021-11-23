import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BcnmDetailsComponent } from './bcnm-details.component';

describe('BcnmDetailsComponent', () => {
  let component: BcnmDetailsComponent;
  let fixture: ComponentFixture<BcnmDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BcnmDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BcnmDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
