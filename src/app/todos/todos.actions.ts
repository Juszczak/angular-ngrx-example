import { createAction, props } from '@ngrx/store';
import { Todo } from './todo.interface';

export const addTodo = createAction('todos/add', props<{ todo: Todo }>());
