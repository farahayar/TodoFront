import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoAjoutComponent } from './to-do-ajout.component';

describe('ToDoAjoutComponent', () => {
  let component: ToDoAjoutComponent;
  let fixture: ComponentFixture<ToDoAjoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToDoAjoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
