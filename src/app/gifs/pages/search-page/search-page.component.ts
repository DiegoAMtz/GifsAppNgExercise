import {ChangeDetectionStrategy, Component, inject, signal} from '@angular/core';
import {GifListComponent} from '../../components/gif-list/gif-list.component';
import {GifsService} from '../../services/gifs.service';
import {Gif} from '../../interfaces/gif.interface';

@Component({
  selector: 'app-search-page',
  imports: [
    GifListComponent
  ],
  templateUrl: './search-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class SearchPageComponent {

  private readonly gifService = inject(GifsService);
  gifs = signal<Gif[][]>([]);

  onSearch(query: string) {
    this.gifService.searchGifs(query).subscribe((gifs: Gif[][]) => this.gifs.set(gifs));
  }
}
