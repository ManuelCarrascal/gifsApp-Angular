import { Component } from '@angular/core';
import { GifsService } from '../../shared/services/gifs.service';
import { Gif } from '../../shared/interfaces/gifs.interfaces';

@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private readonly gifsService:GifsService) { }

  get gifs(): Gif[]{
    return this.gifsService.gifList;

  }

}
