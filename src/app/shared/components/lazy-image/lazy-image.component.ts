import { Component, Input, OnInit } from '@angular/core';
import { debounceTime, delay, of } from 'rxjs';

@Component({
  selector: 'shared-lazy-image',
  standalone: false,

  templateUrl: './lazy-image.component.html',
  styleUrl: './lazy-image.component.scss',
})
export class LazyImageComponent implements OnInit {
  @Input()
  url!: string;

  @Input()
  alt: string = '';

  hasLoaded: boolean = false;

  ngOnInit(): void {
    if (!this.url) throw new Error('URL property is required');
  }

  onLoad() {
    of(true)
      .pipe(delay(1000))
      .subscribe(() => {
        this.hasLoaded = true;
      });
  }
}
