import { Component, computed, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

/**
 * Componente clásico que funciona como página de Dragon Ball.
 * A diferencia de la página "Super", este componente contiene su propio
 * estado de lista de personajes local (no usa el servicio centralizado).
 */
@Component({
  selector: 'app-dragonball',
  imports: [],
  templateUrl: './dragonball-page.component.html',
})
export class DragonballPage {
  
  /** Signal reactivo que almacena el estado del campo de texto (nombre). */
  name = signal('');
  
  /** Signal reactivo que almacena el estado del campo numérico (poder). */
  power = signal(0);

  /** Signal reactivo que contiene la lista inicial y local de personajes. */
  characters = signal<Character[]>([
    {id:1, name: 'Goku', power: 9001 },
    {id:2, name: 'Picoro', power: 100 },
    {id:2, name: 'Vegeta', power: 8000 },
    {id:3, name: 'Frieza', power: 3000 },
  ]);
  
  /** 
   * Signal computado que evalúa y retorna un objeto con clases CSS dinámicamente
   * basado en otras variables o signals. 
   */
  powerClasses = computed(() => {
    return {
      'text-danger': true,
    };
  });
  
  /** 
   * Método que valida los campos del formulario local y si es exitoso, 
   * agrega un nuevo personaje mutando el Signal inmutablemente. 
   */
  addCharacter() {
    // Validaciones básicas de que haya texto y el poder sea mayor que 0
    if(!this.name() || !this.power() || this.power() <= 0  ){
      return;
    }

    // Se crea la estructura del nuevo personaje
    const newCharacter : Character = {
      id: this.characters().length + 1, // Simple auto-incremento
      name: this.name(),
      power: this.power(),
    };

    // Se agrega el nuevo personaje actualizando el arreglo inmutable (clonación + push)
    this.characters.update(
      (list) => [...list, newCharacter]
    )

    // Se procede a limpiar el formulario
    this.resetFields()
  }

  /** 
   * Método para limpiar los campos del formulario reseteando 
   * los valores de los Signals locales a sus por defectos. 
   */
  resetFields(){
    this.name.set('');
    this.power.set(0);
  }


}
