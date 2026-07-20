import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter-page.component';
import { HeroPageComponent } from './pages/hero/hero-page.component';
import { Dragonball } from './pages/dragonball/dragonball-page.component';

/**
 * Definición de las rutas de la aplicación.
 *
 * Este arreglo mapea los diferentes "paths" (URLs) con los componentes
 * que deben renderizarse cuando el usuario navega a dichas rutas.
 */
export const routes: Routes = [
  {
    path: '',
    component: CounterPageComponent,
  },
  {
    path: 'hero',
    component: HeroPageComponent,
  },
  {
    path: 'dragonball',
    component: Dragonball,
  },
  {
    path: '**',
    redirectTo: '',
  }
];
