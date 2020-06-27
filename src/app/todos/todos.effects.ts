import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { tap, map, switchMap } from 'rxjs/operators';
import { fetchTodos, updateSearchQuery, setTodos, addTodo, updateTodo } from './todos.actions';
import { Todo } from './todo.interface';

@Injectable()
export class TodosEffects {
  constructor(private firestore: AngularFirestore, private actions$: Actions) {}

  public fetch$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchTodos),
      switchMap((action) =>
        this.firestore
          .collection<Todo>('todos', (ref) => ref.orderBy('timestamp', 'asc'))
          .valueChanges({ idField: 'id' }),
      ),
      map((todos) => setTodos({ todos })),
    ),
  );

  public add$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(addTodo),
        map((action) => this.firestore.collection('todos').add(action.todo)),
      ),
    { dispatch: false },
  );

  public update$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(updateTodo),
        map(({ id, done }) => {
          const collection = this.firestore.collection('todos');
          const doc = collection.doc(id);
          doc.update({ done });
        }),
      ),
    { dispatch: false },
  );
}
