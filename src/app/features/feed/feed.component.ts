import { Component, OnInit,OnDestroy, ViewChild, ChangeDetectorRef } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table'
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
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
export class FeedComponent {
    users!: any[];
    posts!: IPost[];
    tutos!: Tutorial[];
    sub!: Subscription;
    sub2!:Subscription;
    sub3!:Subscription;
    testPost!: IPost;
    title:any
    body:any
    activePageDataChunk:any = []

    tutorial: Tutorial = {
      key:"1",
      title:"titre",
      description:"description"

    }

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    obs!: Observable<any>;
    dataSource: MatTableDataSource<IPost> = new MatTableDataSource<IPost>(this.posts);
    constructor(private postService: PostService,public authService: AuthService,private userService: UserService,private tutorialService: TutorialService){

    }


    getPostsbyUser(){
      console.log("connecté?",this.authService.currentUser);
        this.sub = this.postService.getAll().subscribe(res =>
          {
            this.posts = res;
         }
       )
        }
    ngOnInit(): void {

      this.getPostsbyUser();
    }
    handleEventEmitter(data: any){
      console.log(data);
    }

    addPost(formValues: any): void{
      this.testPost={
        userId: this.authService.currentUser!.id,
        id: uuid(),
        title: formValues.title,
        body: formValues.body,
      }
      this.postService.create(this.testPost);
    }
    ngOnDestroy(): void {
      if(this.authService.isConnected()){
          this.sub.unsubscribe()
      }
    }

}
