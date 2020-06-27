import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { counterReducer } from './counter/counter.reducer';
import { TodosComponent } from './todos/todos.component';
import { todosReducer } from './todos/todos.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AngularFireModule } from '@angular/fire';
import { TodosEffects } from './todos/todos.effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

@NgModule({
  declarations: [AppComponent, CounterComponent, TodosComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(
      {
        counter: counterReducer,
        todos: todosReducer,
      },
      {},
    ),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([ TodosEffects ]),
    AngularFireModule.initializeApp({
      projectId: 'angular-ngrx-example',
      appId: '1:738377019523:web:918e8f862aeff330c2ebb6',
      databaseURL: 'https://angular-ngrx-example.firebaseio.com',
      storageBucket: 'angular-ngrx-example.appspot.com',
      locationId: 'europe-west',
      apiKey: 'AIzaSyDwN3Q_bymnn3dElSyokLvHH5OmubJ04g4',
      authDomain: 'angular-ngrx-example.firebaseapp.com',
      messagingSenderId: '738377019523',
    }),
    StoreRouterConnectingModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
