# GifsApp

Una aplicación web moderna desarrollada en **Angular** para la búsqueda, visualización y exploración de GIFs. La aplicación permite a los usuarios ver los GIFs en tendencia, realizar búsquedas personalizadas y organizar la navegación mediante un panel lateral intuitivo.

## 🚀 Tecnologías y Herramientas

Este proyecto está construido utilizando las últimas tecnologías del ecosistema frontend:

- **Framework:** [Angular](https://angular.dev/) (v22)
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/) (v4) integrado nativamente.
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
- **Testing:** [Vitest](https://vitest.dev/) como entorno de pruebas rápidas y eficientes.
- **Herramientas de construcción:** Angular CLI y esbuild para un rendimiento óptimo.

## 📦 Estructura del Proyecto

La aplicación está diseñada con una arquitectura modular enfocada en la escalabilidad y mantenibilidad. El dominio principal se encuentra en el módulo `Gifs`, que incluye:

- **Dashboard:** Contenedor principal que maneja la estructura base y la navegación (incluye un menú lateral `gifs-side-menu`).
- **Páginas principales:**
  - `Search Page`: Interfaz dedicada a la búsqueda de GIFs específicos.
  - `Trending Page`: Vista para explorar los GIFs más populares del momento.
- Sistema de rutas para cargar dinámicamente el contenido principal mediante `<router-outlet>`.

## ⚙️ Requisitos Previos

Asegúrate de tener instalado en tu sistema:
- **Node.js** (versión recomendada LTS)
- **NPM** (incluido con Node.js)

## 🛠️ Instalación y Configuración

Sigue estos pasos para levantar el entorno de desarrollo local:

1. Clona el repositorio:
   ```bash
   git clone <url-del-repositorio>
   cd 03-gifs-app
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:
   ```bash
   npm start
   # o alternativamente: ng serve
   ```

Una vez que el servidor esté en ejecución, abre tu navegador y navega a `http://localhost:4200/`. La aplicación se recargará automáticamente al guardar cambios en el código.

## 🧪 Pruebas (Testing)

El proyecto utiliza **Vitest** en lugar de Karma/Jasmine para una experiencia de pruebas unitarias mucho más rápida:

```bash
npm run test
```

## 🏗️ Construcción a Producción

Para compilar la aplicación y generar los artefactos optimizados para producción:

```bash
npm run build
```
Los archivos de salida se generarán dentro del directorio `dist/`.

## 📄 Licencia

Este proyecto es de uso educativo y forma parte del curso de Angular 2026.

## 📚 Conceptos de Estudio

A lo largo del código fuente de esta aplicación se encuentran comentarios documentando diversos conceptos clave de Angular. Aquí hay un resumen de los más importantes:

### 1. Standalone Components
Todos los componentes de la aplicación (`DashboardPage`, `SideMenu`, `List`, `ListItem`, etc.) utilizan la arquitectura **Standalone**.
- Se declaran con `standalone: true` (implícito o explícito en Angular 19+).
- Las dependencias que el componente necesita se inyectan directamente en el arreglo `imports: []` de su decorador `@Component`.

### 2. RouterOutlet y Enrutamiento Dinámico
El componente `DashboardPage` actúa como el **Layout** principal. Dentro de su plantilla (`dashboard-page.html`), se utiliza la directiva `<router-outlet />`. Angular inyecta de forma dinámica los componentes hijos (`TrendingPage`, `SearchPage`) en este espacio basándose en la URL actual de la aplicación.

### 3. Property Binding e Interpolación
- **Interpolación (`{{ }}`)**: Utilizada en `side-menu-header.html` para mostrar propiedades de la clase TypeScript (como `envs.companyName`) en el HTML de forma dinámica.
- **Property Binding (`[ ]`)**: Usado en `side-menu-options.html` para enlazar atributos HTML a propiedades de la clase (ej. `[class]="item.icon"` y `[routerLink]="item.route"`).

### 4. Directivas de Enrutamiento
- `RouterLink`: Sustituye al atributo tradicional `href` para permitir navegación del lado del cliente (Single Page Application), evitando que la página se recargue por completo.
- `RouterLinkActive`: Asigna clases CSS (como `bg-blue-800`) automáticamente cuando la URL coincide con la del enlace activo, ideal para menús laterales o barras de navegación.

### 5. Control de Flujo (Nueva Sintaxis `@for`)
En `side-menu-options.html` y en `list.html`, implementamos la sintaxis moderna de Angular (introducida en Angular 17) para iterar arreglos:
```html
@for (item of menuOptions; track item.route) {
  <!-- Renderizado dinámico del elemento -->
}
```
El uso de `track` mejora considerablemente el rendimiento, ayudando a Angular a saber qué elementos se han añadido, modificado o eliminado, utilizando un identificador único (como `item.route`).

### 6. Signals y Reactividad Moderna
Angular introdujo `Signals` como su nuevo modelo de reactividad.
- En `TrendingPage`, creamos un signal con `gifs = signal(imageUrls);`. Esto envuelve nuestro estado en un contenedor reactivo que notifica a la vista únicamente cuando sus valores cambian, optimizando la detección de cambios (Change Detection).
- Al consumirlo en la vista o en otros métodos, se invoca como una función: `gifs()`.

### 7. Signal Inputs
Utilizamos `input.required<T>()` en `List` y `ListItem` en lugar del clásico decorador `@Input()`.
- Los Signal Inputs son una forma moderna, reactiva y segura en cuanto a tipos para recibir datos del componente padre.
- Al usar `.required()`, Angular lanzará un error de compilación/ejecución si el componente padre no envía esta propiedad (por ejemplo, omitiendo `[imageUrl]="gif"` en `<gifs-list-item>`), asegurando así que los componentes siempre tengan los datos necesarios para funcionar.
