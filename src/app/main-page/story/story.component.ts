import { Component, Input, OnInit } from '@angular/core';
import { Story } from '../types';

@Component({
  selector: 'app-main-page-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css'],
})
export class StoryComponent implements OnInit {
  @Input() story!: Story;

  ngOnInit(): void {}
}
