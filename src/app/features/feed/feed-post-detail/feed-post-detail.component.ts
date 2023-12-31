import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CommentService } from 'src/app/shared/comment.service';
import { IComment } from 'src/app/core/model/comment.model';
import { PostService } from 'src/app/shared/post.service';
import { v4 as uuid } from 'uuid';
import { FormControl } from '@angular/forms';

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
  name = new FormControl();
  email = new FormControl();
  body = new FormControl();

  sub2! : Subscription
  constructor(private postService : PostService,private route: ActivatedRoute,private commentService : CommentService){

  }
  getCommentsByPost(){
    this.sub = this.commentService.getAll().subscribe(res =>
      {
        this.comments = res.filter(x => x.postId == this.post.id);
      }
    )
  }

  ngOnInit(): void {
    this.postService.getPost(this.route.snapshot.params['id']).subscribe(res => {
      this.post = res;
      console.log("ce post précis ",res);
    });
    this.getCommentsByPost();
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  addComment(): void {
    this.testComm = {
      postId: this.post.id,
      id:uuid(),
      name: this.name.value,
      email: this.email.value,
      body: this.body.value,
    }
    this.commentService.create(this.testComm);
  }


}
