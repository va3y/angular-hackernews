import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RouterPaths } from '../app-routing.module';
import { Story } from '../main-page/types';

@Injectable({
  providedIn: 'root',
})
export class GetStoryService {
  #apiClient: HttpClient;

  constructor(apiClient: HttpClient) {
    this.#apiClient = apiClient;
  }

  getStory(storyId: number) {
    return this.#apiClient.get<Story>(`item/${storyId}`);
  }
}
