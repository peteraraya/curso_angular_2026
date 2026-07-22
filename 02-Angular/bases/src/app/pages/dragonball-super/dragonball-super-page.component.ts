import { DragonBallService } from './../../services/dragonball.service';

import { Component, computed, inject, signal } from '@angular/core';
import { CharacterList } from "../../components/dragonball/character-list/character-list";
import { CharacterAdd } from "../../components/dragonball/character-add/character-add";

/**
 * Interfaz que define la estructura de datos para un personaje de Dragon Ball.
 * Incluye un identificador único, el nombre y el nivel de poder del personaje.
 */
interface Character {
  id: number;
  name: string;
  power: number;
}

/**
 * Componente principal de la página de Dragon Ball Super.
 * Se encarga de orquestar y contener los componentes hijos de lista (CharacterList)
 * y de agregar nuevos personajes (CharacterAdd).
 * No contiene lógica de estado compleja ya que delega esto al DragonBallService.
 */
@Component({
  templateUrl: './dragonball-super-page.component.html',
  imports: [CharacterList, CharacterAdd],
})
export class DragonballSuperPage {
  
  /** 
   * Inyección de dependencias utilizando la función moderna `inject()` de Angular.
   * Esto proporciona acceso a la instancia global (Singleton) de DragonBallService
   * para acceder a la lista reactiva de personajes y sus métodos.
   */
  public dragonBallService = inject(DragonBallService);
  
}
