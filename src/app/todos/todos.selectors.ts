import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TodosState } from './todos.state';

export const selectTodosFeature = createFeatureSelector<TodosState>('todos');

export const selectTodosList = createSelector(
  selectTodosFeature,
  (state) => state.list
);

export const selectIsListEmpty = createSelector(
  selectTodosList,
  (list) => list.length === 0,
);
