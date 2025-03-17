import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core';
import {GifListComponent} from '../../components/gif-list/gif-list.component';
import {GifsService} from '../../services/gifs.service';
import {ScrollStateService} from '../../services/scroll-state.service';

@Component({
  selector: 'app-trending-page',
  imports: [
    GifListComponent
  ],
  templateUrl: './trending-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class TrendingPageComponent implements OnInit {

  protected readonly gifsService = inject(GifsService);
  protected readonly scrollStateService = inject(ScrollStateService);
  private currentPage: number = 0;

  ngOnInit() {
    this.gifsService.loadTrendingGifs().subscribe();
  }

  getNewGifs(event: any) {
    if (this.gifsService.trendingGifsLoading()) return;
    this.currentPage = this.currentPage + 1;
    this.gifsService.loadTrendingGifs(this.currentPage).subscribe();
    this.scrollStateService.trendingScrollState.set(event.scrollTop);
  }
}
