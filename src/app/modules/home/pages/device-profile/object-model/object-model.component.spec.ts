import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectModelComponent } from './object-model.component';

describe('ObjectModelComponent', () => {
  let component: ObjectModelComponent;
  let fixture: ComponentFixture<ObjectModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjectModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
