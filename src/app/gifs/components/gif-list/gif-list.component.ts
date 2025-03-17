import {ChangeDetectionStrategy, Component, ElementRef, input, output, viewChild} from '@angular/core';
import {GifListItemComponent} from './gif-list-item/gif-list-item.component';
import {Gif} from '../../interfaces/gif.interface';

@Component({
  selector: 'gif-list',
  imports: [
    GifListItemComponent
  ],
  templateUrl: './gif-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GifListComponent {
  groupOfGifs = input.required<Array<Array<Gif>>>();
  currentScroll = input<number>(0);
  scrollDivRef = viewChild<ElementRef>('groupDiv');
  finalScroll = output<any>();

  onScroll() {
    const scrollDiv = this.scrollDivRef()?.nativeElement;
    if (!scrollDiv) {return}
    const {scrollTop, clientHeight, scrollHeight} = scrollDiv;
    const actualScrollHeight = scrollTop + clientHeight;
    const isAtBottom = (actualScrollHeight + (scrollHeight * 0.05)) >= scrollHeight;
    if (isAtBottom) {
      this.finalScroll.emit({scrollTop});
    }
  }
}
