import { ChangeDetectionStrategy, Component, signal } from "@angular/core";

/**
 * Componente que representa la página del contador.
 *
 * Este componente demuestra el uso tanto de propiedades tradicionales
 * como del uso reactivo mediante Signals en Angular.
 */
@Component({
  templateUrl: './counterPage.html',
  styleUrl: './counterPage.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterPage {
  /**
   * Estado del contador gestionado mediante una propiedad de clase tradicional.
   */
  counter = 10;

  /**
   * Estado del contador gestionado de forma reactiva mediante Signals de Angular.
   */
  counterSignal = signal(10);



  constructor() {
    setInterval(() => {
      // this.counter += 1;
      this.counterSignal.update((current) => current + 1);
      // console.log('tick');
    }, 1000);
  }

  /**
   * Incrementa el valor del contador y de la señal.
   *
   * @param value - La cantidad por la cual se debe incrementar el contador.
   */
  increaseBy(value: number) {
    this.counter += value;
    this.counterSignal.update((current) => current + value);
  }

  /**
   * Disminuye el valor del contador y de la señal.
   *
   * @param value - La cantidad por la cual se debe disminuir el contador.
   */
  descreaseBy(value: number) {
    this.counter -= value;
    this.counterSignal.update((current) => current - value);
  }

  /**
   * Multiplica el valor del contador y de la señal.
   *
   * @param value - El factor por el cual se debe multiplicar el contador.
   */
  multiplyBy(value: number) {
    this.counter *= value;
    this.counterSignal.update((current) => current * value);
  }

  /**
   * Restablece el valor del contador y la señal a 0.
   */
  resetCounter() {
    // Restablecer el valor de la propiedad tradicional a 0
    this.counter = 0;

    // Restablecer el valor de la señal a 0
    this.counterSignal.set(0);
  }
}
