import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedComponent } from './feed.component';
import { FeedPostDetailComponent } from './feed-post-detail/feed-post-detail.component';
import { FeedByUserComponent } from './feed-by-user/feed-by-user.component';

const routes: Routes = [
  {
    path: 'detail/:id',
    component: FeedPostDetailComponent,
  },
  {
    path:'',
    component: FeedComponent
  },
  {
    path:':id',
    component: FeedByUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeedRoutingModule { }
