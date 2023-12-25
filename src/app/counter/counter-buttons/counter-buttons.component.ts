import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrementAction, incrementAction, resetAction } from '../state/counter.action';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.css']
})
export class CounterButtonsComponent {

  countValue: number = 0;

  // @Output()
  // increment: EventEmitter<number> = new EventEmitter<number>();


  // @Output()
  // decrement: EventEmitter<number> = new EventEmitter<number>();


  // @Output()
  // reset: EventEmitter<number> = new EventEmitter<number>();

  // onIncrement() {
  //   this.countValue = this.countValue + 1;
  //   this.increment.emit(this.countValue)
  //   console.log("onIncrement: " + this.countValue);
  // }

  // onDecrement() {
  //   this.countValue = this.countValue - 1;
  //   this.decrement.emit(this.countValue);
  //   console.log("onDecrement: " + this.countValue);
  // }

  // onReset() {
  //   this.countValue = 0;
  //   this.reset.emit(this.countValue);
  //   console.log("onReset: " + this.countValue);
  // }

  constructor(private store: Store<{ counter: { count: number } }>) {

  }

  onIncrement() {
    this.store.dispatch(incrementAction());
  }

  onDecrement() {
    this.store.dispatch(decrementAction());
  }

  onReset() {
    this.store.dispatch(resetAction());
  }
}
