import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterPaths } from '../app-routing.module';
import { GetStoriesService } from './get-stories.service';
import { StoryComponent } from './story/story.component';
import { Story } from './types';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  providers: [StoryComponent],
})
export class MainPageComponent implements OnInit {
  router: Router;
  stories: Story[] = [];

  constructor(router: Router, backend: GetStoriesService) {
    backend.getStories(router.url).subscribe((res) => (this.stories = res));

    this.router = router;
  }

  ngOnInit(): void {}
}
