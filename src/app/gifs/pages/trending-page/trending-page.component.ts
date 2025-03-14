import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core';
import {GifListComponent} from '../../components/gif-list/gif-list.component';
import {GifsService} from '../../services/gifs.service';

@Component({
  selector: 'app-trending-page',
  imports: [
    GifListComponent
  ],
  templateUrl: './trending-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class TrendingPageComponent implements OnInit {

  private readonly gifsService = inject(GifsService);
  protected readonly imageUrls = this.gifsService.trendingGifs;

  ngOnInit() {
    this.gifsService.loadTrendingGifs().subscribe();
  }
}
