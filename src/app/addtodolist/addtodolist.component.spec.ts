import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTodoListComponent } from './addtodolist.component';

describe('AddTodoListComponent', () => {
  let component: AddTodoListComponent;
  let fixture: ComponentFixture<AddTodoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTodoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
