import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoModifierComponent } from './to-do-modifier.component';

describe('ToDoModifierComponent', () => {
  let component: ToDoModifierComponent;
  let fixture: ComponentFixture<ToDoModifierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToDoModifierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoModifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
