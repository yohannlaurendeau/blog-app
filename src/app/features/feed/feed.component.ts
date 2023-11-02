import { Component, OnInit,OnDestroy, ViewChild, ChangeDetectorRef } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table'
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { IPost } from 'src/app/core/model/post.model';
import { AuthService } from 'src/app/shared/auth.service';
import { PostService } from 'src/app/shared/post.service';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent {
    users!: any[];
    posts!: IPost[];
    sub!: Subscription;
    sub2!:Subscription;
    testPost!: IPost;
    title:any
    body:any
    activePageDataChunk:any = []

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    obs!: Observable<any>;
    dataSource: MatTableDataSource<IPost> = new MatTableDataSource<IPost>(this.posts);
    constructor(private postService: PostService,public authService: AuthService,private userService: UserService,private router : Router,private changeDetectorRef: ChangeDetectorRef){

    }


    getPostsbyUser(){
      console.log("connecté?",this.authService.currentUser);
        this.sub = this.postService.getPosts().subscribe(res =>
          {
            this.posts = res;
         }
       )
        }
    getUsers(){
      this.userService.getUsers().subscribe((response) => console.log("users",response));
    }
    ngOnInit(): void {

      this.getPostsbyUser();
      this.getUsers();

    }
    handleEventEmitter(data: any){
      console.log(data);
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
