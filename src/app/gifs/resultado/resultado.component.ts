import { Component } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interfaces/gifs.interface';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styles: [
  ]
})
export class ResultadoComponent  {
  get resultados(): Gif[] {
    return this.gifsService.respuesta
  }

  constructor(private gifsService: GifsService) {}
}
