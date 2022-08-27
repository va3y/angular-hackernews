import { Component, Input, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Router,
} from '@angular/router';
import { GetStoriesService } from '../main-page/get-stories.service';
import { Story } from '../main-page/types';
import { GetStoryService } from './get-story.service';

@Component({
  selector: 'app-stories-page',
  templateUrl: './stories-page.component.html',
  styleUrls: ['./stories-page.component.css'],
})
export class StoriesPageComponent implements OnInit {
  story: Story = {
    id: 0,
    title: '',
    comments_count: 0,
    url: '',
    comments: [],
  };

  constructor(
    private router: ActivatedRoute,
    private backend: GetStoryService
  ) {
    // backend.getStories(router.).subscribe((res) => (this.stories = res));
    // router.queryParamMap.subscribe((newParamMap) =>
    //   console.log(newParamMap.keys)
    // );
    this.router.paramMap.subscribe((newParamMap) => {
      const storyId = newParamMap.get('id');
      if (storyId) {
        backend.getStory(storyId).subscribe((res) => (this.story = res));
      }
    });
  }

  ngOnInit(): void {}
}
