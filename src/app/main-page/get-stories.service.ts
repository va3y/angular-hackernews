import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RouterPaths } from '../app-routing.module';
import { Story } from './types';

@Injectable({
  providedIn: 'root',
})
export class GetStoriesService {
  #apiClient: HttpClient;

  constructor(apiClient: HttpClient) {
    this.#apiClient = apiClient;
  }

  getStories(slug: string) {
    console.log(slug);
    const slugToRequestEndingMap: Record<string, string> = {
      ['/' + RouterPaths.Home]: 'news',
      ['/' + RouterPaths.Jobs]: 'jobs',
      ['/' + RouterPaths.New]: 'newest',
      ['/' + RouterPaths.Show]: 'show',
      ['/' + RouterPaths.Ask]: 'ask',
    };
    return this.#apiClient.get<Story[]>(slugToRequestEndingMap[slug]);
  }
}
