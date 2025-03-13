import {Gif} from '../interfaces/gif.interface';
import {GiphyItem} from '../interfaces/giphy-response.interface';

export class GifMapper {
  static mapGiphyItemToGif(gif: GiphyItem): Gif {
    return {
      id: gif.id ?? '',
      title: gif.title ?? '',
      url: gif.images?.original?.url ?? ''
    }
  }

  static mapGiphyItemsToGifArray(items: GiphyItem[]) : Gif[] {
    return items?.map((item) => this.mapGiphyItemToGif(item));
  }
}
