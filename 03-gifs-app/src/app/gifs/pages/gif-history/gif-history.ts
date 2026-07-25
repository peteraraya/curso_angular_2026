import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop'
import { map } from 'rxjs';
import { GifsService } from '../../services/gifs.service';
import { GifsList } from "../../components/list/gif-list";
@Component({
  selector: 'app-gifs-history',
  imports: [GifsList],
  templateUrl: './gif-history.html',
})
export default class GifsHistory {

  /**
   * Servicio inyectado para obtener el historial de Gifs.
   */
  gifService = inject(GifsService);

  /**
   * Signal reactiva que obtiene el parámetro 'query' de la URL de forma asíncrona.
   * Utiliza toSignal para convertir el Observable de los parámetros de la ruta en un signal.
   */
  query = toSignal(
    inject(ActivatedRoute).params.pipe(
      map(params => params['query'])
    )
  );

  /**
   * Computed signal que devuelve el listado de Gifs del historial
   * basándose en la búsqueda actual (query).
   */
  gifsByKey = computed(()=>{
    return this.gifService.getHistoryGifs(this.query());
  })

}
