import { Todo } from './todo.interface';

export interface TodosState {
  list: Todo[];
  searchQuery: string;
}
