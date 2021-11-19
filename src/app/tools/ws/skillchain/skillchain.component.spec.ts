import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillchainComponent } from './skillchain.component';

describe('SkillchainComponent', () => {
  let component: SkillchainComponent;
  let fixture: ComponentFixture<SkillchainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillchainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillchainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
