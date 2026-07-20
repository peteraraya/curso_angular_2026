import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './navbar.html',
})
/**
 * Componente funcional compartido.
 * Renderiza la barra de navegación principal y usa directivas de Angular Router
 * para manejar la navegación SPA.
 */
export class Navbar {}
