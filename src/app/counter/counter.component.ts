import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html'
})

export class CounterComponent {
  constructor() {

  }
  public counter = 0;

  increaseBy(value: number): void {
    this.counter += value;
  }
  resetToTen() {
    this.counter = 10;
  }
  decreaseBy(value: number): void {
    this.counter -= value;
  }
}
