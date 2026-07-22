import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';


interface MenuOptions {
  icon: string;
  label:string;
  route: string;
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
