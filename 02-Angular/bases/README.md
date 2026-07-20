# Bases - Curso de Angular

Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) versión 22.0.7.

Esta sección está diseñada como una **guía definitiva y apuntes exhaustivos** para el curso, documentando absolutamente todos los archivos y directorios del proyecto, de modo que puedas comprender exactamente qué hace cada pieza de tu aplicación Angular.

---

## 📁 Estructura Completa del Proyecto

Al crear un proyecto y avanzar en las clases, se va configurando una estructura. A continuación se documenta **todo el contenido actual del proyecto**, directorio por directorio:

### 1. Raíz del Proyecto (Archivos de Configuración)

En la raíz se encuentran las configuraciones globales que permiten que tu entorno de trabajo, repositorios y compilador funcionen correctamente.

*   **`node_modules/`**: Directorio donde npm instala todas las dependencias y librerías externas que Angular requiere. **Nunca** se debe modificar manualmente y está excluido de Git.
*   **`public/`**: (Reemplaza a `src/assets` en las nuevas versiones). Aquí alojas los archivos estáticos públicos (como `favicon.ico`, imágenes o fuentes). Al compilar el proyecto, Angular copia esta carpeta intacta a la carpeta final de despliegue.
*   **`angular.json`**: El "cerebro" del Angular CLI. Configura los comandos de compilación (`build`), pruebas (`test`), servidor de desarrollo (`serve`), así como los estilos globales, scripts de terceros y los assets (recursos estáticos).
*   **`package.json`**: El registro de tu proyecto para Node.js. Almacena metadatos del proyecto, scripts (ej. `npm run start`), e indica exactamente qué paquetes están instalados (dependencias y devDependencies).
*   **`package-lock.json`**: Bloquea las versiones exactas de todos los paquetes instalados y de sus subdependencias, asegurando que cualquier otra persona que clone este repositorio instale las mismas versiones exactas en `node_modules/`.
*   **`tsconfig.json`**: Archivo de configuración global del compilador de TypeScript. Define cómo debe traducirse tu código TypeScript a JavaScript (target, paths, strict mode, etc.).
*   **`tsconfig.app.json`**: Extiende la configuración de `tsconfig.json` y la personaliza específicamente para compilar el código fuente de tu aplicación (la carpeta `src/`).
*   **`tsconfig.spec.json`**: Extiende la configuración de `tsconfig.json` pero orientada a los archivos de pruebas (`.spec.ts`).
*   **`.gitignore`**: Lista de archivos y directorios (ej. `node_modules`, `dist`) que Git debe ignorar para no subirlos al repositorio.
*   **`.editorconfig`**: Archivo para unificar reglas de edición (como usar 2 espacios de indentación) independientemente del IDE (VS Code, WebStorm) que use cada programador.
*   **`.prettierrc`**: Configuración de Prettier. Es una herramienta que formatea automáticamente el código para que todo el equipo mantenga el mismo estilo visual en los archivos (uso de comillas, puntos y comas, etc.).
*   **`README.md`**: ¡Este archivo! La carta de presentación y documentación principal de tu proyecto.

> **💡 Nota sobre el Código Fuente:** Todos los archivos principales `.ts` y plantillas `.html` de este proyecto cuentan con **comentarios didácticos y profesionales en línea (JSDoc)**. Puedes revisar el interior de archivos como `main.ts`, `app.ts` o `counterPage.ts` para entender línea por línea su propósito y sintaxis.

---

### 2. Directorio Fuente: `src/`

La carpeta `src/` (Source) contiene el código real de tu aplicación. 

*   **`index.html`**: El documento HTML principal. Como Angular hace aplicaciones SPA (Single Page Application), todo el proyecto ocurre en esta única página. Contiene la etiqueta `<app-root>` (u otra principal) donde Angular inyectará todos tus componentes dinámicamente.
*   **`main.ts`**: El punto de entrada a tu aplicación. Es el primer archivo de TypeScript que se ejecuta. Su función principal es el **Bootstrap** (arranque), que inicializa Angular e inserta tu componente principal en el `index.html`.
*   **`styles.css`**: (o `.scss`). La hoja de estilos global. Todo lo que pongas aquí afectará visualmente a toda tu aplicación, sin importar en qué componente te encuentres.

---

### 3. El Corazón de la Aplicación: `src/app/`

En las versiones modernas de Angular, trabajamos con **Componentes Standalone** (independientes) por lo que ya no es estrictamente necesario un archivo `app.module.ts`. Aquí es donde programas toda tu lógica.

*   **`app.config.ts`**: Proveedor global de configuraciones. Aquí se registran elementos vitales de la aplicación usando funciones (ej. `provideRouter(routes)` para habilitar las rutas, o `provideBrowserGlobalErrorListeners()`).
*   **`app.routes.ts`**: Aquí se define la navegación (el Router). Es un arreglo de objetos de configuración donde indicas, por ejemplo: _"Cuando la URL sea `/counter`, carga el componente `CounterPage`"_.
*   **`app.ts`**: (El Componente Raíz o Root Component). Se declara la clase `App` usando el decorador `@Component`. 
    *   **Importante:** En este archivo se incluye el `RouterOutlet`, la directiva de Angular que decide qué mostrar en la pantalla dependiendo de la URL (si estás en `/counter`, mostrará la página del contador).
    *   Usa **Signals** (como `signal('Pedro Araya')`) para el manejo reactivo moderno de estados.
*   **`app.html`**: La plantilla HTML del componente raíz `app.ts`. Define la estructura visual base de la aplicación (ej. una cabecera) y, vitalmente, incluye la etiqueta `<router-outlet>` donde se inyectarán las páginas.

---

### 4. Módulos y Páginas: `src/app/pages/`

Una buena práctica en proyectos de Angular es separar las vistas completas (Páginas) de los pequeños componentes reutilizables (Botones, Tarjetas).

#### 🔹 `pages/counter/`

En esta carpeta hemos desarrollado la funcionalidad y la vista de un contador, que funciona como nuestra primera página funcional del curso.

*   **`counter-page.component.ts`**: (Anteriormente `counterPage.ts`). La lógica principal de la página. 
    *   Es un componente documentado y decorado con `@Component`, enlazado a su HTML y CSS.
    *   Implementa una **variable tradicional** y un **Signal de Angular** permitiendo entender ambas formas de gestionar la reactividad en el framework.
*   **`counter-page.component.html`**: El código HTML exclusivo para el contador, donde se utiliza interpolación y Event Binding.

#### 🔹 `pages/hero/`

Nueva sección del curso donde aprendemos conceptos más avanzados sobre manipulación de Signals y formatos.

*   **`hero-page.component.ts`**: Componente donde exploramos:
    *   **Signals Computados (`computed`)**: Funciones que escuchan otras señales y reaccionan a sus cambios automáticamente (ej. `heroDescription`).
    *   **Pipes Nativos**: Importación directa de tuberías como `UpperCasePipe` para darle formato a textos.
*   **`hero-page.component.html`**: Uso de interpolación para las señales computadas y ejemplo en vivo de cómo utilizar un Pipe directamente en el template HTML (`{{ name() | uppercase }}`).

#### 🔹 `pages/dragonball/`

Nueva sección del curso donde aprendemos sobre listas, condicionales y control de flujo usando la nueva sintaxis de Angular.

*   **`dragonball-page.component.ts`**: Componente donde exploramos:
    *   **Signals e interfaces**: Creación de un array de objetos tipados (`Character`) envueltos en un `signal` y el uso de métodos de actualización (`update`).
    *   **Computed Signals y Clases**: Uso de `computed` para retornar clases CSS dinámicamente según el estado de nuestras variables.
    *   **NgClass**: Importación y uso de utilidades de `@angular/common` para aplicar clases condicionales.
*   **`dragonball-page.component.html`**: Uso de la nueva sintaxis de control de flujo de Angular (`@for`, `@if`, `@else`):
    *   **@for**: Para iterar sobre el signal `characters()` y generar una lista de elementos, usando `track` para optimización y variables locales como `$index`.
    *   **@if / @else**: Para renderizar condicionalmente elementos del DOM (ej. validando el nivel de poder de un personaje).
    *   **Class Binding**: Uso de utilidades directas de Angular como `[class.text-danger]="..."` para aplicar estilos de forma condicional.
    *   **Event Binding y Referencias Locales**: Manejo de eventos `(click)`, `(change)` o `(input)` junto con referencias locales de template (ej. `#txtName`) para actualizar nuestros Signals de forma reactiva y simular un *two-way binding* manual.

---

### 5. Componentes Compartidos: `src/app/components/`

Los componentes compartidos son elementos reutilizables que pueden ser importados en múltiples páginas o en el componente raíz (app) de la aplicación.

#### 🔹 `components/shared/navbar/`

Barra de navegación global de la aplicación.

*   **`navbar.ts`**: Lógica del componente de navegación.
    *   Importa y utiliza utilidades de enrutamiento nativas de Angular: `RouterLink` y `RouterLinkActive`.
*   **`navbar.html`**: Plantilla de la barra de navegación que hace uso de la directiva `routerLink` para navegar de forma instantánea sin recargar la página (comportamiento base de una SPA) y `routerLinkActive` para asignar clases CSS (como resaltados) a la ruta actualmente activa.

---

## 🚀 Comandos Útiles de Angular CLI (Apuntes)

### Servidor de Desarrollo
Para iniciar un servidor local y probar tu app en vivo, ejecuta:
```bash
ng serve
```
Ve a `http://localhost:4200/`. El navegador se recargará automáticamente al detectar cambios.

### Generación de Código (Scaffolding)
Para evitar crear los archivos (`.ts`, `.html`, `.css`) manualmente, usamos Angular CLI:
```bash
# Crear un nuevo componente (se recomienda generarlos en carpetas ordenadas):
ng generate component pages/home

# Forma abreviada:
ng g c pages/home
```

### Compilación (Build)
Cuando termines el curso y quieras publicar la web:
```bash
ng build
```
Generará la carpeta `dist/` en tu proyecto, conteniendo todo minificado y empaquetado para subirse al servidor de producción.

### Pruebas (Testing)
Para probar si tu código funciona (Angular suele venir configurado con Jasmine/Karma o Vitest en versiones recientes):
```bash
ng test
