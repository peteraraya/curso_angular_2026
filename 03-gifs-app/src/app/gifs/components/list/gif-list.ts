import { Component, input } from '@angular/core';
import { GifsListItem } from "./list-item/gif-list-item";
import { Gif } from '../../interfaces/gif.interface';

/**
 * List Component:
 * Componente contenedor que muestra una lista de Gifs.
 * Utiliza e importa el componente ListItem para renderizar cada elemento de la lista.
 */
@Component({
  selector: 'gifs-list',
  imports: [GifsListItem],
  templateUrl: './gif-list.html',
})
export class GifsList {
  /**
   * Signal Input: Forma moderna y reactiva de recibir datos desde el componente padre.
   * `input.required<Gif[]>()` asegura que el componente consumidor DEBE proveer este atributo.
   * En el HTML del padre se utiliza property binding: [gifs]="...".
   * 
   * Al ser un Signal, cualquier cambio en la lista propagará la actualización a la vista 
   * de forma altamente optimizada.
   */
  gifs = input.required<Gif[]>();

}
