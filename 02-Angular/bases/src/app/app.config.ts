import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

/**
 * Configuración global de la aplicación Angular.
 *
 * Define los proveedores (providers) que estarán disponibles en toda la aplicación,
 * como la configuración de rutas y el manejo de errores globales del navegador.
 */
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes)
  ]
};
