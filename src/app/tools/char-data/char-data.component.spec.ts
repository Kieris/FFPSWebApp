import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharDataComponent } from './char-data.component';

describe('CharDataComponent', () => {
  let component: CharDataComponent;
  let fixture: ComponentFixture<CharDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
