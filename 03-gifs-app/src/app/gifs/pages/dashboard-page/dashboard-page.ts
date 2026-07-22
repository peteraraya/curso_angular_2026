import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenu } from "../../components/side-menu/side-menu";

/**
 * DashboardPage:
 * Es el componente principal (Layout) que envuelve nuestra aplicación de Gifs.
 * Utiliza componentes Standalone de Angular (imports dentro del decorador @Component).
 */
@Component({
  selector: 'gifs-dashboard-page',
  // RouterOutlet permite renderizar componentes hijos basados en la ruta actual.
  // SideMenu es nuestro componente personalizado para la navegación lateral.
  imports: [RouterOutlet, SideMenu],
  templateUrl: './dashboard-page.html',
})
export default class DashboardPage {}
