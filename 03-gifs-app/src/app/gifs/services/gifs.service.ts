import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { environment } from '@environment/environment';
import type { GiphyResponse } from '../interfaces/giphy.interface';
import { Gif } from '../interfaces/gif.interface';
import { GifMapper } from '../mapper/gif.mapper';
import { map, Observable, tap } from 'rxjs';

/**
 * Servicio encargado de interactuar con la API de Giphy.
 * Maneja el estado global de los Gifs (por ejemplo, los trending) a través de signals.
 */
@Injectable({ providedIn: 'root' })
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
    trendingGifsLoading = signal(false);


    private trendingPages = signal(0);

    // [[gif,gif,gif],[gif,gif,gif],[gif,gif,gif], ]

    trendingGifGroup = computed<Gif[][]>(() => {
        const groups = [];

        for (let i = 0; i < this.trendingGifs().length; i += 3) {
            groups.push(this.trendingGifs().slice(i, i + 3))
        }

        // console.log(groups)

        return groups;

    })

    /**
     * Signal que mantiene el historial de búsquedas como un diccionario (clave-valor).
     * La clave es el término de búsqueda en minúsculas y el valor es el arreglo de Gifs obtenidos.
     */
    searchHistory = signal<Record<string, Gif[]>>({});

    /**
     * Computed signal que obtiene dinámicamente un arreglo con las claves (términos de búsqueda)
     * a partir del historial almacenado en `searchHistory`.
     */
    searchHistoryKeys = computed(() =>
        Object.keys(this.searchHistory()));

    constructor() {
        // Cargamos el historial desde localStorage si existe
        this.loadLocalStorage();
        // Al instanciar el servicio, cargamos automáticamente los Gifs populares
        this.loadTrendingGifs();
    }

    /**
     * Guarda el historial de búsquedas actual en el localStorage.
     */
    private saveLocalStorage() {
        localStorage.setItem('history', JSON.stringify(this.searchHistory()));
    }

    /**
     * Carga el historial de búsquedas desde el localStorage, si existe y es válido.
     */
    private loadLocalStorage() {
        if (typeof localStorage === 'undefined') return;

        const history = localStorage.getItem('history');
        if (!history) return;

        try {
            this.searchHistory.set(JSON.parse(history));
        } catch (error) {
            console.error('Error al recuperar el historial del localStorage', error);
        }
    }

    /**
     * Realiza una petición GET a la API de Giphy para obtener los Gifs que están en tendencia.
     * Una vez obtenidos, utiliza el GifMapper para formatearlos y actualiza el signal `trendingGifs`.
     */
    loadTrendingGifs() {

        if(this.trendingGifsLoading()) return;

        this.trendingGifsLoading.set(true);

        this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/trending`, {
            params: {
                api_key: environment.gifsApikey,
                limit: 20,
                offset: this.trendingPages() * 20
            },
        }).subscribe((resp) => {

            // Mapeamos la respuesta (GiphyItem[]) hacia nuestra interfaz interna (Gif[])
            const gifs = GifMapper.mapGiphyItemToGifArray(resp.data);

            // Actualizamos el signal con los nuevos gifs
            this.trendingGifs.update(currentGifs => [
                ...currentGifs,
                ...gifs
            ]);


            this.trendingPages.update((page) => page + 1)

            // Cambiamos el estado de carga a falso
            this.trendingGifsLoading.set(false);

            // console.log(gifs);
        })

    }
    /**
     * Realiza una petición GET a la API de Giphy para buscar Gifs basados en un término (query).
     * Formatea la respuesta y la guarda en el historial de búsquedas.
     * @param query El término de búsqueda para consultar en la API.
     * @returns Un Observable que emite un arreglo de objetos Gif.
     */
    searchGifs(query: string): Observable<Gif[]> {

        return this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/search`, {
            params: {
                api_key: environment.gifsApikey,
                limit: 20,
                q: query,
            },
        }).pipe(
            map(({ data }) => data),
            map((items) => GifMapper.mapGiphyItemToGifArray(items)),

            // Historial
            tap((items) => {
                this.searchHistory.update((history) => ({
                    ...history,
                    [query.toLowerCase()]: items,
                }));
                this.saveLocalStorage();
            })

        ) //rxjs



        // si no hay sucribe no se dispara la peticion
        // .subscribe( (resp) => {

        //     // Mapeamos la respuesta (GiphyItem[]) hacia nuestra interfaz interna (Gif[])
        //     const gifs = GifMapper.mapGiphyItemToGifArray(resp.data);
        //     console.log({search: gifs});
        // })
    }


    /**
     * Obtiene el historial de Gifs asociado a un término de búsqueda específico.
     * @param query Término de búsqueda (clave) para buscar en el historial.
     * @returns Un arreglo de Gifs correspondientes a la búsqueda, o un arreglo vacío si no existe.
     */
    getHistoryGifs(query: string): Gif[] {
        return this.searchHistory()[query] ?? [];
    }



}

// Va trabajar como si fuera un singleton
// para que la peticion http se dispare uno debe suscribirse
