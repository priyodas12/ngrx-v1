import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent {

  counterOutput!: number;

  constructor(private store: Store<{ counter: { count: number } }>) {

  }

  ngOnInit() {
    this.store.select('counter').subscribe(data => {
      this.counterOutput = data.count;
      console.log(this.counterOutput);

    })
  }

}
