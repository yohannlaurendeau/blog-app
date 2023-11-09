import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IPost } from 'src/app/core/model/post.model';
import { AuthService } from 'src/app/shared/auth.service';
import { PostService } from 'src/app/shared/post.service';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit{
    users!: any[];
    posts!: IPost[];
    sub!: Subscription;
    sub2!:Subscription;
    testPost!: IPost;
    title:any
    body:any

    constructor(private postService: PostService,public authService: AuthService){

    }


    getPostsbyUser(){
        this.sub = this.postService.getPosts().subscribe(res =>
          {
            this.posts = res;
         }
       )
        }

    ngOnInit(): void {

      // this.getPostsbyUser();

    }

    addPost(formValues: any): void{
      this.testPost={
        userId: this.authService.currentUser!.id,
        id: 20,
        title: formValues.title,
        body: formValues.body,
      }
      this.sub2 = this.postService.addPost(this.testPost).subscribe((response) =>{
        this.posts.push(response)
        console.log(response)
      })
    }
    ngOnDestroy(): void {
      if(this.authService.isConnected()){
          this.sub.unsubscribe()
      }
    }

}
