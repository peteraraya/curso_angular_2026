import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';



/** 
 * Función auxiliar para cargar los personajes desde el almacenamiento local del navegador (LocalStorage).
 * Si existen datos guardados con la clave 'characters', los retorna como un arreglo de objetos Character.
 * En caso contrario, retorna un arreglo vacío por defecto.
 * @returns {Character[]} Arreglo de personajes cargados desde el LocalStorage o un arreglo vacío.
 */
const loadFromLocalStorage = (): Character[] => {
    const characters = localStorage.getItem('characters');

    return characters ? JSON.parse(characters):[];
}

/**
 * Servicio centralizado para la gestión de personajes de Dragon Ball.
 * Proporciona un estado reactivo global utilizando Signals, asegurando que 
 * los datos se mantengan sincronizados en todos los componentes que lo utilicen.
 * Al estar provisto en 'root', Angular garantiza que exista una única instancia (Singleton).
 */
@Injectable({providedIn: 'root'})
export class DragonBallService {
    
    /** Constructor del servicio */
    constructor() { }

  /** 
   * Signal reactivo que contiene la lista de personajes.
   * Se inicializa ejecutando la función loadFromLocalStorage() para recuperar
   * cualquier estado previamente guardado.
   */
  characters = signal<Character[]>(loadFromLocalStorage());

  /**
   * Efecto reactivo de Angular que observa los cambios en el Signal 'characters'.
   * Cada vez que la lista de personajes se actualice (se agregue, modifique o elimine uno),
   * este efecto se ejecutará automáticamente guardando la nueva lista en el LocalStorage.
   */
  saveToLocalStorage = effect(() =>{
    // console.log(`Character count ${this.characters().length}`)
    localStorage.setItem( 'characters', JSON.stringify(this.characters()));
  })

  /** 
   * Método público que permite agregar un nuevo personaje a la lista reactiva (Signal).
   * Utiliza el método 'update' del signal para generar un nuevo estado inmutable
   * agregando el nuevo elemento al final de la lista actual.
   * 
   * @param {Character} character - El objeto del nuevo personaje a agregar.
   */
  addCharacter(character:Character) {
    this.characters.update(
      list => [...list, character]
    )
  }
}
