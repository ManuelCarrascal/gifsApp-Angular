import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../../shared/interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card',
  standalone: false,

  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent implements OnInit {
  @Input()
  gif!: Gif;

  ngOnInit() {
    if (!this.gif) {
      throw new Error('Gif property is required');
    }
  }
}
