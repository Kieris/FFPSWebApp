import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobDataComponent } from './mob-data.component';

describe('MobDataComponent', () => {
  let component: MobDataComponent;
  let fixture: ComponentFixture<MobDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
