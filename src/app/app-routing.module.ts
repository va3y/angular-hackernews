import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { httpInterceptorProviders } from './http-interceptor';
import { MainPageComponent } from './main-page/main-page.component';

import { StoriesPageComponent } from './stories-page/stories-page.component';

export enum RouterPaths {
  Home = '',
  New = 'new',
  Show = 'show',
  Ask = 'ask',
  Jobs = 'jobs',
  StoryPage = 'story/:id',
}

const routes: Routes = [
  { path: RouterPaths.Home, component: MainPageComponent },
  { path: RouterPaths.New, component: MainPageComponent },
  { path: RouterPaths.Ask, component: MainPageComponent },
  { path: RouterPaths.Jobs, component: MainPageComponent },
  { path: RouterPaths.Show, component: MainPageComponent },
  { path: RouterPaths.StoryPage, component: StoriesPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [httpInterceptorProviders],
})
export class AppRoutingModule {}
