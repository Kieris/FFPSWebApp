import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BcnmComponent } from './bcnm.component';

describe('BcnmComponent', () => {
  let component: BcnmComponent;
  let fixture: ComponentFixture<BcnmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BcnmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BcnmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
