/**
 * Punto de entrada principal de la aplicación.
 * Importa los estilos globales y los módulos de ejemplo.
 */
import './style.css'

// import './topics/01-basic-types';
// import './topics/02-object-interface';
// import './topics/03-functions';
// import './topics/04-homework-types.ts';
// import './topics/05-basic-destructuring.ts';
// import './topics/06-function-destructuring.ts';
// import './topics/07-modules.ts';
// import './topics/08-classes.ts';
// import './topics/09-generics.ts';
// import './topics/10-decorators.ts';
import './topics/11-optioonal-chaining.ts';

/**
 * Elemento contenedor principal del DOM.
 */
const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
  <h1>Hello Vite + TypeScript!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`
