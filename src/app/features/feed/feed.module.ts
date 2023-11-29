import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { FeedPostDetailCommentComponent } from './feed-post-detail-comment/feed-post-detail-comment.component';
import { FeedPostDetailComponent } from './feed-post-detail/feed-post-detail.component';
import { FeedPostComponent } from './feed-post/feed-post.component';
import { FeedComponent } from './feed.component';
import { FeedRoutingModule } from './feed-routing.module';
import { FeedByUserComponent } from './feed-by-user/feed-by-user.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FeedComponent,
    FeedPostComponent,
    FeedPostDetailComponent,
    FeedPostDetailCommentComponent,
    FeedByUserComponent
  ],
  imports: [
    CommonModule,
    FeedRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class FeedModule { }
