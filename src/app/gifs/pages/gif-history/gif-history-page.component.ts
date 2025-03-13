import {ChangeDetectionStrategy, Component, computed, inject} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {ActivatedRoute} from '@angular/router';
import {map} from 'rxjs';
import {GifsService} from '../../services/gifs.service';
import {GifListComponent} from '../../components/gif-list/gif-list.component';

@Component({
  selector: 'gif-history-page',
  imports: [
    GifListComponent
  ],
  templateUrl: './gif-history-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class GifHistoryPageComponent {
  gifService = inject(GifsService);
  key = toSignal(inject(ActivatedRoute).params.pipe(map(params => params['key'])));
  gifs = computed(() => {
    return this.gifService.getHistoryGifs(this.key())
  })

}
