import { Component, output, signal } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

/**
 * Componente responsable de renderizar el formulario para agregar 
 * nuevos personajes de Dragon Ball.
 */
@Component({
  selector: 'dragonball-character-add',
  imports: [],
  templateUrl: './character-add.html',
})
export class CharacterAdd {
    
  /** Signal reactivo que almacena el estado del nombre del personaje en el formulario. */
  name = signal('');
  
  /** Signal reactivo que almacena el estado del nivel de poder del personaje en el formulario. */
  power = signal(0);

  /** 
   * Output moderno (Event Emitter) que emite un evento hacia el componente padre
   * pasando el objeto del nuevo personaje creado.
   */
  newCharacter = output<Character>();


  /** 
   * Método ejecutado al enviar el formulario.
   * Valida los campos ingresados y, si son correctos, crea un objeto Character,
   * emite el evento para notificar al padre y reinicia los valores del formulario.
   */
  addCharacter() {
    // Validación: El nombre debe existir, el poder debe ser mayor a 0
    if(!this.name() || !this.power() || this.power() <= 0  ){
      return;
    }

    // Creación del nuevo objeto personaje con ID aleatorio
    const newCharacter : Character = {
      id: Math.floor(Math.random() * 1000),
      name: this.name(),
      power: this.power(),
    };

    // Emisión del evento 'newCharacter' enviando el objeto creado
    this.newCharacter.emit(newCharacter);

    // Se limpia el formulario después de emitir el evento
    this.resetFields();
  }

  /**
   * Método auxiliar para restablecer los Signals del formulario a sus valores por defecto.
   */
  resetFields() {
    this.name.set('');
    this.power.set(0);
  }

}
