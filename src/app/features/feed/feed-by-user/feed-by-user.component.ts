import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IPost } from 'src/app/core/model/post.model';
import { AuthService } from 'src/app/shared/auth.service';
import { PostService } from 'src/app/shared/post.service';
import { UserService } from 'src/app/shared/user.service';
import { v4 as uuid } from 'uuid';
@Component({
  selector: 'app-feed-by-user',
  templateUrl: './feed-by-user.component.html',
  styleUrls: ['./feed-by-user.component.css']
})
export class FeedByUserComponent {
  users!: any[];
  posts!: IPost[];
  sub!: Subscription;
  sub2!:Subscription;
  testPost!: IPost;
  title = new FormControl();
  body = new FormControl();


  constructor(private postService: PostService,private authService: AuthService){

  }


  getPostsbyUser(){
    // if(this.authService.isConnected()){
      this.sub = this.postService.getAll().subscribe(res =>
        {
          console.log("auth Service",this.authService.currentUser!.id);
          this.posts = res.filter(x => x.userId === this.authService.currentUser!.id);
          console.log(this.posts);
       }
     )
    //  }
      }
  ngOnInit(): void {
    console.log("page chargé");
    //this.getPostsbyUser();
  }

  addPost(): void{
    this.testPost={
      userId: this.authService.currentUser!.id,
      id: uuid(),
      title: this.title.value,
        body: this.body.value,
    }
    this.postService.create(this.testPost);
  }
  ngOnDestroy(): void {
    if(this.authService.isConnected()){
        this.sub.unsubscribe()
    }
  }
}
