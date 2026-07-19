import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

/**
 * Componente principal de la aplicación.
 *
 * Actúa como el contenedor raíz o "layout" base donde se inyectan
 * las demás páginas a través del enrutador (RouterOutlet).
 */
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
})
export class App {
  /**
   * Título de la aplicación gestionado de forma reactiva a través de un Signal.
   */
  protected readonly title = signal('Pedro Araya');
}
