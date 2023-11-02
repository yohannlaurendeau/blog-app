import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CommentService } from 'src/app/shared/comment.service';
import { IComment } from 'src/app/core/model/comment.model';
import { PostService } from 'src/app/shared/post.service';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-feed-post-detail',
  templateUrl: './feed-post-detail.component.html',
  styleUrls: ['./feed-post-detail.component.css']
})
export class FeedPostDetailComponent implements OnInit,OnDestroy{
  post!: any ;
  comments!: IComment[];
  sub! : Subscription;
  testComm!: IComment;
  name: any
  email : any
  body: any
  sub2! : Subscription
  constructor(private postService : PostService,private route: ActivatedRoute,private commentService : CommentService){

  }
  getCommentsByPost(){
    this.sub = this.commentService.getComments().subscribe(res =>
      {
        this.comments = Object.values(res).filter(x => x.postId == this.route.snapshot.params['id']);
      }
    )
  }

  ngOnInit(): void {
    this.post = this.postService.getPost(+this.route.snapshot.params['id']);
    this.getCommentsByPost();
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  addComment(formValues: any ): void {
    this.testComm = {
      postId: this.route.snapshot.params['id'],
      id:20,
      name: formValues.name,
      email: formValues.email,
      body: formValues.body,
    }
    this.sub2 = this.commentService.addComment(this.testComm).subscribe((response) =>{
      this.comments.push(response)
      console.log(response)
    })
  }


}
