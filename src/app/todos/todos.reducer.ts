import { createReducer, on } from '@ngrx/store';
import { TodosState } from './todos.state';
import { addTodo } from './todos.actions';

const initialState: TodosState = {
  list: [],
  searchQuery: '',
};

export const todosReducer = createReducer(
  initialState,

  on(addTodo, (state, action) => ({
    ...state,
    list: [...state.list, action.todo],
  })),
);
