import { Component, signal } from '@angular/core';
import { List } from "../../components/list/list";
const imageUrls: string[] = [
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg"
];
/**
 * TrendingPage Component:
 * Página principal que muestra los Gifs populares.
 * Utiliza el componente List para renderizar la colección de imágenes.
 */
@Component({
  selector: 'gifs-trending-page',
  // Importamos el componente List que utilizamos en el HTML.
  imports: [List],
  templateUrl: './trending-page.html',
})
export default class TrendingPage {
  // Signal: Una de las nuevas características de reactividad de Angular.
  // Es un "envoltorio" reactivo alrededor de un valor (en este caso el arreglo imageUrls)
  // que permite notificar a la vista cuando cambia para re-renderizar eficientemente.
  gifs = signal(imageUrls);

}
