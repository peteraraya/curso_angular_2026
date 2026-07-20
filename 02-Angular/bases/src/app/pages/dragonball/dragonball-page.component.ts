import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball',
  imports: [NgClass],
  templateUrl: './dragonball-page.component.html',
})
export class Dragonball {
  
  /** Signal que almacena el nombre del personaje a crear */
  name = signal('');
  /** Signal que almacena el poder del personaje a crear */
  power = signal(0);

  /** Signal que contiene la lista reactiva de personajes */
  characters = signal<Character[]>([
    {id:1, name: 'Goku', power: 9001 },
    {id:2, name: 'Picoro', power: 100 },
    {id:2, name: 'Vegeta', power: 8000 },
    {id:3, name: 'Frieza', power: 3000 },
  ]);
  
  /** Signal computado que evalúa y retorna clases CSS dinámicamente */
  powerClasses = computed(() => {
    return {
      'text-danger': true,
    };
  });
  
  /** Método que valida los campos y agrega un nuevo personaje al Signal */
  addCharacter() {
    if(!this.name() || !this.power() || this.power() <= 0  ){
      return;
    }

    const newCharacter : Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power(),
    };

    // Agrega el nuevo personaje al arreglo inmutable
    this.characters.update(
      (list) => [...list, newCharacter]
    )

    this.resetFields()
  }

  /** Limpia los campos del formulario reseteando los Signals */
  resetFields(){
    this.name.set('');
    this.power.set(0);
  }


}
