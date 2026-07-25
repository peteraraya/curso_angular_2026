import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { GifsService } from '../../../services/gifs.service';


/**
 * Interfaz que define la estructura de una opción del menú lateral.
 */
interface MenuOptions {
  /** Clase del ícono (ej. FontAwesome) a mostrar en el menú. */
  icon: string;
  /** Título principal de la opción del menú. */
  label:string;
  /** Ruta de navegación a la que apuntará el routerLink. */
  route: string;
  /** Subtítulo o descripción corta de la opción. */
  subLabel:string;
}

/**
 * SideMenuOptions:
 * Muestra una lista de opciones de navegación.
 * Utiliza directivas de enrutamiento como RouterLink para cambiar la ruta sin recargar la página,
 * y RouterLinkActive para añadir clases CSS cuando la ruta está activa.
 */
@Component({
  selector: 'gifs-side-menu-options',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu-options.html',
})
export class SideMenuOptions {

  /**
   * Inyectamos el servicio de Gifs para poder acceder al historial de búsquedas
   * y mostrarlo dinámicamente en el menú lateral.
   */
  gifsService = inject(GifsService);
  
  /**
   * Arreglo estático con las opciones principales de navegación del menú.
   */
  menuOptions: MenuOptions[] = [
    {
      icon: 'fa-solid fa-chart-line',
      label: 'Trending',
      route: '/dashboard/trending',
      subLabel: 'Gifs populares',
    },
    {
      icon: 'fa-solid fa-magnifying-glass',
      label: 'Search',
      route: '/dashboard/search',
      subLabel: 'Buscar gifs',
    },
  ];
}
