import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import type { Character } from '../../../interfaces/character.interface';

/**
 * Componente de presentación puro (Dumb Component) encargado
 * exclusivamente de renderizar una lista de personajes.
 * Recibe toda su información desde componentes padres a través de inputs.
 */
@Component({
  selector: 'dragonball-character-list',
  templateUrl: './character-list.html',
})
export class CharacterList {

  /** 
   * Input reactivo moderno y requerido que recibe el arreglo 
   * de personajes (Character) a mostrar en la lista. 
   */
  characters = input.required<Character[]>()
  
  /** 
   * Input reactivo moderno y requerido que recibe el título o nombre 
   * que se mostrará en el encabezado de la lista. 
   */
  listName = input.required<string>();

}
