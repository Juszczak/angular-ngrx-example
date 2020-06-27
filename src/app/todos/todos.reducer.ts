import { createReducer } from '@ngrx/store';
import { TodosState } from './todos.state';

const initialState: TodosState = {
  list: [],
  searchQuery: '',
};

export const todosReducer = createReducer(initialState);
