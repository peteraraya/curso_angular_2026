import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '@environment/environment';
import type { GiphyResponse } from '../interfaces/giphy.interface';
import { Gif } from '../interfaces/gif.interface';
import { GifMapper } from '../mapper/gif.mapper';

/**
 * Servicio encargado de interactuar con la API de Giphy.
 * Maneja el estado global de los Gifs (por ejemplo, los trending) a través de signals.
 */
@Injectable({providedIn: 'root'})
export class GifsService {
   
    /**
     * Inyectamos el cliente HTTP para realizar peticiones.
     */
    private http = inject(HttpClient);

    /**
     * Signal que almacena la lista de Gifs populares (trending).
     * Se puede acceder a su valor reactivo usando trendingGifs().
     */
    trendingGifs = signal<Gif[]>([]);

    /**
     * Signal que indica si la petición de Gifs populares está en curso (estado de carga).
     */
    trendingGifsLoading = signal(true);

    constructor () {
        // Al instanciar el servicio, cargamos automáticamente los Gifs populares
        this.loadTrendingGifs();
    }

    /**
     * Realiza una petición GET a la API de Giphy para obtener los Gifs que están en tendencia.
     * Una vez obtenidos, utiliza el GifMapper para formatearlos y actualiza el signal `trendingGifs`.
     */
    loadTrendingGifs(){ 

        this.http.get<GiphyResponse>(`${ environment.giphyUrl }/gifs/trending`,{
           params:{
             api_key: environment.gifsApikey,
             limit:20,
           },
        }).subscribe( (resp) => {
           
            // Mapeamos la respuesta (GiphyItem[]) hacia nuestra interfaz interna (Gif[])
            const gifs = GifMapper.mapGiphyItemToGifArray(resp.data);

            // Actualizamos el signal con los nuevos gifs
            this.trendingGifs.set(gifs);

            // Cambiamos el estado de carga a falso
            this.trendingGifsLoading.set(false);

            console.log(gifs);
        })

    }
}

// Va trabajar como si fuera un singleton 
// para que la peticion http se dispare uno debe suscribirse
