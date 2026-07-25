import { Component, computed, inject, signal } from '@angular/core';
import { GifsList } from "../../components/list/gif-list";
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gif.interface';


/**
 * SearchPage Component:
 * Esta página será responsable de proporcionar la interfaz y lógica para buscar Gifs.
 * Es un componente que se carga de forma diferida (lazy loaded) a través del router.
 */
@Component({
  selector: 'gifs-search-page',
  imports: [GifsList],
  templateUrl: './search-page.html',
})
export default class SearchPage {

  /**
   * Servicio inyectado para interactuar con la lógica de Gifs (búsqueda, historial, etc).
   */
  gifsService = inject(GifsService);

  /**
   * Signal que almacena la lista de Gifs obtenidos tras una búsqueda.
   * Inicialmente está vacío.
   */
  gifs = signal<Gif[]>([]);

  /**
   * Método que se ejecuta al presionar Enter en el input de búsqueda.
   * Llama al servicio para buscar los gifs y actualiza el signal `gifs`.
   * @param query El término de búsqueda ingresado por el usuario.
   */
  onSearch(query: string) {
    // ahora tenemos acceso al observable
    this.gifsService.searchGifs(query).subscribe((resp) =>{
      this.gifs.set(resp);
    })
   
  }

}
