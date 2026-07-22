import { Component, input } from '@angular/core';

/**
 * ListItem Component:
 * Un componente pequeño y enfocado (dumb component) que solo se encarga de mostrar un Gif en particular.
 * No tiene lógica de negocio ni estado complejo, solamente recibe o muestra datos de un único elemento.
 */
@Component({
  selector: 'gifs-list-item',
  imports: [],
  templateUrl: './list-item.html',
})
export class ListItem {
  // Signal Input: Recibe la URL de la imagen desde el componente padre (<gifs-list>).
  // Es obligatorio (required), lo que asegura que el componente no se pueda usar sin proveer [imageUrl].
  imageUrl = input.required<string>();

}
