import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root' // Este servicio es declarado de forma global en mi aplicacion
})
export class GifsService {

  private apiKey: string = '4WHWmR663hhOHo3oRwUNQIT6ngOt0sBd';

  private _historial: string[] = [];

  public respuesta: Gif[] = [];

  get historial(): string[] {
    return [...this._historial];
  }

  constructor(private http: HttpClient) {
    if (localStorage.getItem('historial') && localStorage.getItem('resultado')) {
      this._historial = JSON.parse(localStorage.getItem('historial')!);
      this.respuesta = JSON.parse(localStorage.getItem('resultado')!);
    }
  }

  buscarGifs(query: string): void {

    query = query.trim().toLowerCase();

    if (!this._historial.includes(query) && query.length > 0) { 
      this._historial.unshift(query);
      this._historial = this._historial.slice(0,10);
      localStorage.setItem('historial', JSON.stringify(this._historial));
    }

    this.http.get<SearchGifsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=4WHWmR663hhOHo3oRwUNQIT6ngOt0sBd&q=${query}&limit=10`)
      .subscribe((rs) => {
        this.respuesta = rs.data;
        localStorage.setItem('resultado', JSON.stringify(this.respuesta));
      });
  }
}
