import { Component, computed, inject, signal } from '@angular/core';

import { GifsService } from '../../services/gifs.service';
import { GifsList } from "../../components/list/gif-list";

// const imageUrls: string[] = [
//     "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
//     "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
//     "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
//     "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
//     "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
//     "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
//     "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg",
//     "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg",
//     "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg",
//     "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg",
//     "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg",
//     "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg"
// ];
/**
 * TrendingPage Component:
 * Página principal que muestra los Gifs populares.
 * Utiliza el componente List para renderizar la colección de imágenes.
 */
@Component({
  selector: 'gifs-trending-page',
  // Importamos el componente List que utilizamos en el HTML.
  imports: [GifsList],
  templateUrl: './trending-page.html',
})
export default class TrendingPage {
  
  /**
   * Inyectamos el servicio de Gifs que se encarga de manejar el estado global 
   * y las peticiones a la API.
   */
  gifsService = inject(GifsService);

  /**
   * Computed: Crea una señal (signal) derivada.
   * Depende de la señal `trendingGifs` en el servicio `GifsService`.
   * Si `trendingGifs` cambia, Angular recomputará automáticamente este valor y
   * actualizará la vista donde se esté enlazando `gifs()`.
   */
  gifs = computed( () => this.gifsService.trendingGifs());

}
