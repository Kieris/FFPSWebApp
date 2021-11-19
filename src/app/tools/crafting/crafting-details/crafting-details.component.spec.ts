import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CraftingDetailsComponent } from './crafting-details.component';

describe('CraftingDetailsComponent', () => {
  let component: CraftingDetailsComponent;
  let fixture: ComponentFixture<CraftingDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CraftingDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CraftingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
