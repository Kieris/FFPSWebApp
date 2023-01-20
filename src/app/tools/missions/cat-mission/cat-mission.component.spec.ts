import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatMissionComponent } from './cat-mission.component';

describe('CatMissionComponent', () => {
  let component: CatMissionComponent;
  let fixture: ComponentFixture<CatMissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatMissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
