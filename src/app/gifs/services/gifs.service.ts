import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // Este servicio es declarado de forma global en mi aplicacion
})
export class GifsService {

  private apiKey: string = '4WHWmR663hhOHo3oRwUNQIT6ngOt0sBd';

  private _historial: string[] = [];

  public respuesta: any[] = [];

  get historial(): string[] {
    return [...this._historial];
  }

  constructor(private http: HttpClient) { }

  buscarGifs(query: string): void {

    query = query.trim().toLowerCase();

    if (!this._historial.includes(query) && query.length > 0) { 
      this._historial.unshift(query);
      this._historial = this._historial.slice(0,10);
    }

    this.http.get('https://api.giphy.com/v1/gifs/search?api_key=4WHWmR663hhOHo3oRwUNQIT6ngOt0sBd&q=pikachu&limit=10')
      .subscribe((rs: any) => {
        this.respuesta = rs.data;
      });
  }
}
