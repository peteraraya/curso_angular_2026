# Bases - Curso de Angular

Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) versión 22.0.7.

Esta sección está diseñada como apuntes para el curso, explicando detalladamente la estructura de directorios y archivos de un proyecto en Angular para entender cómo funciona "por debajo".

---

## 📁 Estructura de Directorios y Archivos

Al crear un proyecto en Angular, el CLI genera una estructura de carpetas y archivos predefinida. Como estudiante de Angular, es fundamental que entiendas para qué sirve cada uno:

### Directorios Principales

*   **`node_modules/`**: Contiene todas las librerías y dependencias instaladas a través de `npm` (Node Package Manager) que Angular necesita para funcionar. **Nunca** se debe modificar manualmente ni subir al repositorio (ya viene ignorado en `.gitignore`).
*   **`public/`**: (En versiones anteriores de Angular se llamaba `src/assets`). Aquí se colocan los archivos estáticos y recursos públicos de la aplicación, como imágenes, fuentes o el icono `favicon.ico`. Estos archivos se copian tal cual al compilar el proyecto.
*   **`src/`**: Es la carpeta más importante. Aquí es donde escribirás el 99% de tu código fuente (componentes, servicios, interfaces, estilos, etc.).

### Dentro de la carpeta `src/`

*   **`app/`**: Es el **corazón** de la aplicación. Aquí residen todos los componentes, servicios y rutas de tu aplicación Angular.
    *   Generalmente encontrarás un componente raíz (el punto de partida de la interfaz), y a partir de aquí crearás subcarpetas para organizar los distintos módulos de tu aplicación.
*   **`index.html`**: Es la única página HTML real del proyecto (ya que Angular crea aplicaciones tipo *Single Page Application - SPA*). Angular inyecta dinámicamente nuestra aplicación dentro de este archivo, usualmente dentro de una etiqueta como `<app-root>`.
*   **`main.ts`**: Es el punto de entrada principal de la aplicación. Es el primer archivo TypeScript que se ejecuta y se encarga de "arrancar" (bootstrap) la aplicación Angular y montar el componente principal en el `index.html`.
*   **`styles.css`** (o `.scss`): Archivo de hojas de estilo globales. Los estilos CSS que pongas aquí afectarán a toda la aplicación en general, a diferencia de los estilos propios de cada componente que son aislados.

### Archivos de Configuración en la Raíz

*   **`angular.json`**: Es el archivo de configuración central de Angular CLI. Aquí se define cómo se compila el proyecto, qué recursos (assets) incluir, la configuración de diferentes entornos (desarrollo, producción) y estilos globales.
*   **`package.json`**: Archivo de configuración fundamental de Node.js. Lista las dependencias del proyecto (librerías que usa tu app), las dependencias de desarrollo y los "scripts" (comandos útiles como `npm start`).
*   **`package-lock.json`**: Asegura que las versiones exactas de las dependencias instaladas en `node_modules/` sean las mismas para cualquier otra persona que clone el proyecto.
*   **`tsconfig.json`**, **`tsconfig.app.json`**, **`tsconfig.spec.json`**: Archivos de configuración de TypeScript. Le indican al compilador cómo el código escrito en TypeScript debe ser transpilado (convertido) a JavaScript estándar para que el navegador lo pueda entender.
    *   `tsconfig.app.json`: Configuración específica para el código de la aplicación.
    *   `tsconfig.spec.json`: Configuración específica para los archivos de pruebas (testing).
*   **`.gitignore`**: Archivo de Git que especifica qué archivos y carpetas se deben ignorar y no subir al repositorio de código (como la pesada carpeta `node_modules/` o la carpeta de compilación).
*   **`.editorconfig`**: Ayuda a mantener una consistencia en la configuración del editor de código (como VS Code) entre diferentes desarrolladores que trabajen en el proyecto (ej. tamaño de las tabulaciones).
*   **`.prettierrc`**: Configuración para Prettier, una herramienta que formatea el código automáticamente para mantener un estilo limpio, estandarizado y legible.

---

## 🚀 Comandos Útiles de Angular CLI (Apuntes)

### Servidor de Desarrollo
Para iniciar un servidor de desarrollo local y ver tu aplicación, ejecuta:
```bash
ng serve
```
Luego, abre tu navegador en `http://localhost:4200/`. La aplicación se recargará automáticamente cada vez que guardes cambios en tus archivos.

### Generación de Código
Angular CLI incluye herramientas para crear la estructura de nuevos elementos rápidamente (scaffolding):
```bash
# Para crear un nuevo componente:
ng generate component nombre-del-componente

# Forma abreviada:
ng g c nombre-del-componente
```
*(Puedes generar componentes, servicios, pipes, directivas, etc.)*

### Compilación (Build)
Para compilar el proyecto y prepararlo para producción:
```bash
ng build
```
Esto creará una carpeta `dist/` en la raíz de tu proyecto con los archivos HTML, CSS y JS completamente optimizados y listos para ser subidos a un servidor web.

### Pruebas (Testing)
Para ejecutar pruebas unitarias:
```bash
ng test
