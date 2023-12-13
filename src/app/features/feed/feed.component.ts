import { Component, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { IPost } from 'src/app/core/model/post.model';
import Tutorial from 'src/app/core/model/tutorial.model';
import { AuthService } from 'src/app/shared/auth.service';
import { PostService } from 'src/app/shared/post.service';
import { TutorialService } from 'src/app/shared/tutorial.service';
import { UserService } from 'src/app/shared/user.service';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit{
    users!: any[];
    posts!: IPost[];
    tutos!: Tutorial[];
    sub!: Subscription;
    sub2!:Subscription;
    sub3!:Subscription;
    testPost!: IPost;
    title = new FormControl();
    body = new FormControl();

    tutorial: Tutorial = {
      key:"1",
      title:"titre",
      description:"description"

    }

    constructor(private postService: PostService,public authService: AuthService,private userService: UserService,private tutorialService: TutorialService){

    }


    getPostsbyUser(){

        this.sub = this.postService.getAll().subscribe(res =>
          {
            this.posts = res;
         }
       )
        }
    ngOnInit(): void {
      this.authService.isConnectedV2();
      this.getPostsbyUser();
    }

    addPost(): void{
      this.testPost={
        userId: this.authService.currentUser!.id!,
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
