import { Component, Input } from '@angular/core';
import { IComment } from 'src/app/core/model/comment.model';

@Component({
  selector: 'app-feed-post-detail-comment',
  templateUrl: './feed-post-detail-comment.component.html',
  styleUrls: ['./feed-post-detail-comment.component.css']
})
export class FeedPostDetailCommentComponent {
    @Input() comment : IComment  = {
      postId : -1,
      name:"",
      id:-1,
      email:"",
      body:""
    } ;

}
