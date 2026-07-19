import { Component } from "@angular/core";


@Component({
  template: `
    <h1>CounterPageComponent</h1>
    <h4>Counter: {{ counter }}</h4>
    <button (click)="increaseBy(1)">+1</button>
  `,
})


export class CounterPageComponent {

  counter = 10;

  increaseBy(value: number) {
    this.counter += value;
  }



}
