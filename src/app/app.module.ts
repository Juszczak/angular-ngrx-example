import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { TodosComponent } from './todos/todos.component';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [AppComponent, CounterComponent, TodosComponent],
  imports: [BrowserModule, AppRoutingModule, StoreModule.forRoot({}, {})],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
