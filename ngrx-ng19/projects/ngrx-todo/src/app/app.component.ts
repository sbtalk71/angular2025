import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { ToDo } from './store/todos.reducers';
import { Observable } from 'rxjs';
import {addTodo,removeToDo,toggleToDo} from './store/todos.actions'
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo/todo.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule,TodoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ngrx-todo';

  todos$!: Observable<ToDo[]>;
  constructor(private store: Store<{ todos: ToDo[] }>) {
    this.todos$ = this.store.select('todos');
  }

  addTodo(){
this.store.dispatch(addTodo({text:"Meet the man"}))
  }

  toggleTodo(){

  }
  removeTodo(){

  }
}
