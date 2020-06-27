import { createAction, props } from '@ngrx/store';
import { Todo } from './todo.interface';

export const addTodo = createAction('todos/add', props<{ todo: Todo }>());

export const updateTodo = createAction('todos/update', props<{ id: string, done: boolean }>());

export const updateSearchQuery = createAction('todos/search', props<{ searchQuery: string }>());
