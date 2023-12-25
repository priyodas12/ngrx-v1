import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {

  countP: number = 0;

  getCountValue(event: any) {
    this.countP = Number(event);
  }

}
