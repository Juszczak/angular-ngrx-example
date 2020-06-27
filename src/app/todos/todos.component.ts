import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { addTodo, updateTodo } from './todos.actions';
import { selectIsListEmpty, selectTodosList } from './todos.selectors';
import { Todo } from './todo.interface';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  public todos$ = this.store.select(selectTodosList);
  public empty$ = this.store.select(selectIsListEmpty);

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  public addTodo(text: string) {
    const todo = {
      id: `${Date.now()}`,
      text,
      done: false,
      timestamp: Date.now(),
    };

    this.store.dispatch(addTodo({ todo }));
  }

  public updateTodo(todo: Todo, done: boolean) {
    this.store.dispatch(updateTodo({ id: todo.id, done }));
  }
}
