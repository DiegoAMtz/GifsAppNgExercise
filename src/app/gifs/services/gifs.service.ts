import {computed, effect, inject, Injectable, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable, tap} from 'rxjs';
import {environment} from '@environments/environment';
import {Gif} from '../interfaces/gif.interface';
import {GifMapper} from '../mapper/gif.mapper';
import GiphyResponse from '../interfaces/giphy-response.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private http = inject(HttpClient);
  trendingGifs = signal<Gif[]>([]);

  searchHistory = signal<Record<string, Gif[]>>(JSON.parse(
    localStorage.getItem('history') ?? '{}'
  ));
  searchHistoryKeys = computed(() => Object.keys(this.searchHistory()));
  saveHistory = effect(() => {
    const historyString = JSON.stringify(this.searchHistory());
    localStorage.setItem('history', historyString);
  });

  loadTrendingGifs(): Observable<Gif[]> {
    return this.http.get<GiphyResponse>(`${environment.giphyUrl}/trending`, {
      params: {
        api_key: environment.giphyApiKey,
        limit: 25,
        offset: 0,
        rating: 'g',
      }
    }).pipe(
      map(response => GifMapper.mapGiphyItemsToGifArray(response.data ?? [])),
      tap(gifs => this.trendingGifs.set(gifs))
    );
  }

  searchGifs(query: string): Observable<Gif[]> {
    return this.http.get<GiphyResponse>(`${environment.giphyUrl}/search`, {
      params: {
        api_key: environment.giphyApiKey,
        limit: 25,
        offset: 0,
        rating: 'g',
        q: query
      }
    }).pipe(
      map(response => GifMapper.mapGiphyItemsToGifArray(response.data ?? [])),
      tap(gifs => this.searchHistory.update(history => ({...history, [query.toLowerCase()]: gifs})))
    );
  }

  getHistoryGifs(key: string): Gif[] {
    return this.searchHistory()[key];
  }
}
