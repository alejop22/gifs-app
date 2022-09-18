import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // Este servicio es declarado de forma global en mi aplicacion
})
export class GifsService {

  private _historial: string[] = [];

  get historial(): string[] {
    return [...this._historial];
  }

  buscarGifs(query: string): void {

    query = query.trim().toLowerCase();

    if (!this._historial.includes(query) && query.length > 0) { 
      this._historial.unshift(query);
      this._historial = this._historial.slice(0,10);
    }

  }
}
