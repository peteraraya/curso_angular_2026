import { Component, input } from '@angular/core';

/**
 * ListItem Component:
 * Un componente pequeño y enfocado (dumb component) que solo se encarga de mostrar un Gif en particular.
 * No tiene lógica de negocio ni estado complejo, solamente recibe o muestra datos de un único elemento.
 */
@Component({
  selector: 'gifs-list-item',
  imports: [],
  templateUrl: './gif-list-item.html',
})
export class GifsListItem {
  /**
   * Signal Input: Recibe la URL de la imagen desde el componente padre (<gifs-list>).
   * Al ser `required()`, asegura en tiempo de compilación que este componente no se puede 
   * utilizar en una plantilla sin proporcionarle la propiedad `[imageUrl]="..."`.
   */
  imageUrl = input.required<string>();

}
