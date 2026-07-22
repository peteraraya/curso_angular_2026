import { Component } from '@angular/core';
import { SideMenuHeader } from "./side-menu-header/side-menu-header";
import { SideMenuOptions } from "./side-menu-options/side-menu-options";

/**
 * SideMenu Component:
 * Un componente contenedor (Smart/Dumb component dependiendo del estado) para la barra lateral.
 * Se encarga de agrupar el Header y las Opciones del menú.
 */
@Component({
  selector: 'gifs-side-menu',
  // Importamos los componentes hijos Standalone que se usarán dentro del template side-menu.html
  imports: [SideMenuHeader, SideMenuOptions],
  templateUrl: './side-menu.html',
})
export class SideMenu {}
