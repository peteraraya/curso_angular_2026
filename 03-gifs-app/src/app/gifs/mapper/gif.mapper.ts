import { Gif } from "../interfaces/gif.interface";
import { GiphyItem } from "../interfaces/giphy.interface";

/**
 * Clase utilitaria para mapear las respuestas de la API de Giphy
 * hacia nuestra interfaz interna de la aplicación (Gif).
 */
export class GifMapper {

    /**
     * Mapea un único elemento devuelto por la API de Giphy hacia nuestra interfaz Gif.
     * Se extrae específicamente la URL original de la imagen en lugar de la URL de la página.
     * 
     * @param item Elemento de tipo GiphyItem que proviene de la API
     * @returns Un objeto de tipo Gif con los datos formateados
     */
    static mapGiphyItemToGif(item: GiphyItem): Gif {

        return {
            id: item.id,
            title: item.title,
            // Utilizamos la url directa a la imagen en vez de la url de la página web (item.url)
            url: item.images.original.url
        };

    }

    /**
     * Mapea un arreglo de elementos de la API de Giphy hacia un arreglo de Gifs internos.
     * 
     * @param items Arreglo de elementos GiphyItem
     * @returns Arreglo de objetos Gif
     */
    static mapGiphyItemToGifArray(items: GiphyItem[]): Gif[] {

        return items.map(this.mapGiphyItemToGif);

    }

}
