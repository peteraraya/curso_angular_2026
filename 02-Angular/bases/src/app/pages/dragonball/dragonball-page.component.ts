import { Component, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
  alive: boolean;
}

@Component({
  selector: 'app-dragonball',
  imports: [],
  templateUrl: './dragonball-page.component.html',
})
export class Dragonball {

  characters = signal<Character[]>([
    {id:1, name: 'Goku', power: 9001, alive: true },
    {id:2, name: 'Vegeta', power: 8500, alive: true },
    {id:3, name: 'Frieza', power: 12000, alive: false },
  ]);

}
