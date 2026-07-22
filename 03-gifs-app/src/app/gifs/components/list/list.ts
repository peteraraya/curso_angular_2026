import { Component, input } from '@angular/core';
import { ListItem } from "./list-item/list-item";

/**
 * List Component:
 * Componente contenedor que muestra una lista de Gifs.
 * Utiliza e importa el componente ListItem para renderizar cada elemento de la lista.
 */
@Component({
  selector: 'gifs-list',
  imports: [ListItem],
  templateUrl: './list.html',
})
export class List {
  // Signal Input: Una forma moderna de recibir datos desde el componente padre.
  // Es reactivo por defecto (al ser un signal) y obligatorio (required).
  // Solo se puede enlazar usando property binding en el padre: [gifs]="...".
  gifs = input.required<string[]>();

}
