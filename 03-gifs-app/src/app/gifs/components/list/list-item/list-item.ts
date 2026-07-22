import { Component } from '@angular/core';

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
export class ListItem {}
