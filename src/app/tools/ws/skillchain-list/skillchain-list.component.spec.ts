import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillchainListComponent } from './skillchain-list.component';

describe('SkillchainListComponent', () => {
  let component: SkillchainListComponent;
  let fixture: ComponentFixture<SkillchainListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillchainListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillchainListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
