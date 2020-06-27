import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { addTodo } from './todos.actions';
import { selectIsListEmpty, selectTodosList } from './todos.selectors';

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
      text,
      done: false,
      timestamp: Date.now(),
    };

    this.store.dispatch(addTodo({ todo }));
  }
}
