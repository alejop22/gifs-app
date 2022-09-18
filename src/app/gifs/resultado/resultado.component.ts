import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styles: [
  ]
})
export class ResultadoComponent  {
  get resultados(): any[] {
    return this.gifsService.respuesta
  }

  constructor(private gifsService: GifsService) {}
}
