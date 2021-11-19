import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorDataComponent } from './actor-data.component';

describe('ActorDataComponent', () => {
  let component: ActorDataComponent;
  let fixture: ComponentFixture<ActorDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActorDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
