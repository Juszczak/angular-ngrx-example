import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { decrementCounter, incrementCounter } from './counter.actions';
import { selectCounter } from './counter.selector';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
  public counter$ = this.store.select(selectCounter);

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  public increment() {
    this.store.dispatch(incrementCounter());
  }

  public decrement() {
    this.store.dispatch(decrementCounter());
  }
}
