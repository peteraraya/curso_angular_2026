import { Component } from '@angular/core';
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
export class List {}
