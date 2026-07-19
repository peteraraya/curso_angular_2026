import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

/**
 * Punto de entrada principal de la aplicación Angular.
 *
 * Arranca (bootstrap) el componente raíz (App) y le pasa la
 * configuración global (appConfig) que incluye el enrutador y
 * otros proveedores (providers).
 */
bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
