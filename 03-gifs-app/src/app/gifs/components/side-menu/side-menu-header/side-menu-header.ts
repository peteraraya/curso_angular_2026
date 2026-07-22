import { Component } from '@angular/core';
import { environment } from '@environment/environment';

/**
 * SideMenuHeader:
 * Renderiza la parte superior del menú lateral.
 * Muestra información como el logo o textos importados desde los environments.
 */
@Component({
  selector: 'gifs-side-menu-header',
  imports: [],
  templateUrl: './side-menu-header.html',
})
export class SideMenuHeader {
  // Propiedad de la clase que almacena las variables de entorno.
  // Podrá ser accedida desde el template mediante interpolación ({{ envs... }}).
  envs = environment;

}
