import { Component, computed, signal } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

/**
 * Componente que representa la página del Héroe.
 *
 * En este componente se exploran conceptos avanzados de Angular como
 * las "Señales Computadas" (computed signals) y el uso de Pipes integrados (UpperCasePipe).
 */
@Component({
  templateUrl: './hero-page.component.html',
  imports: [UpperCasePipe],
})
export class HeroPageComponent {
  /**
   * Nombre del héroe gestionado de forma reactiva a través de un Signal.
   */
  name = signal('Ironman');

  /**
   * Edad del héroe gestionada de forma reactiva a través de un Signal.
   */
  age = signal(45);

  /**
   * Señal computada (computed) que combina dinámicamente el nombre y la edad del héroe.
   * Se actualiza de forma automática cada vez que 'name' o 'age' cambian su valor.
   */
  heroDescription = computed(() => {
    const description = `${this.name()} - ${this.age()}`;
    return description;
  });

  /**
   * Señal computada que transforma el nombre del héroe a mayúsculas.
   */
  capitalizedName = computed(() => this.name().toUpperCase());

  /**
   * Cambia los valores de las señales al héroe 'Spiderman' con 22 años.
   */
  changeHero() {
    this.name.set('Spiderman');
    this.age.set(22);
  }

  /**
   * Actualiza el valor de la señal de la edad a 60 años.
   */
  changeAge() {
    this.age.set(60);
  }

  /**
   * Restablece los valores iniciales de las señales.
   */
  resetForm() {
    this.name.set('Ironman');
    this.age.set(45);
  }
}
