import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatMissionsComponent } from './cat-missions.component';

describe('CatMissionsComponent', () => {
  let component: CatMissionsComponent;
  let fixture: ComponentFixture<CatMissionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatMissionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatMissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
