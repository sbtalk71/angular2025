import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { Store } from '@ngrx/store';
import { addTodo, toggleToDo, removeToDo } from '../store/todos.actions';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo',
  imports: [FormsModule,CommonModule],
  template: `
    <h2>To-Do List</h2>
    <input [(ngModel)]="todoText" placeholder="Enter a task" />
    <button (click)="add()">Add</button>

    <ul>
      <li *ngFor="let todo of todos$ | async">
        <span [style.textDecoration]="todo.completed ? 'line-through' : 'none'"
              (click)="toggle(todo.id)">
          {{ todo.text }}
        </span>
        <button (click)="remove(todo.id)">❌</button>
      </li>
    </ul>
  `
})
export class TodoComponent {
  todos$: Observable<Todo[]>;
  todoText: string = '';

  constructor(private store: Store<{ todos: Todo[] }>) {
    this.todos$ = store.select('todos');
  }

  add() {
    if (this.todoText.trim()) {
      this.store.dispatch(addTodo({ text: this.todoText }));
      this.todoText = '';
    }
  }

  toggle(id: number) {
    this.store.dispatch(toggleToDo({ id }));
  }

  remove(id: number) {
    this.store.dispatch(removeToDo({ id }));
  }
}
