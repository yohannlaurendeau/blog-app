import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IPost } from 'src/app/core/model/post.model';
import { PostService } from 'src/app/shared/post.service';

@Component({
  selector: 'app-feed-post',
  templateUrl: './feed-post.component.html',
  styleUrls: ['./feed-post.component.css']
})
export class FeedPostComponent implements OnInit{
  @Input() post!: IPost;
  @Output() eventClick = new EventEmitter();
  value = "testvalue";
  key:any;
  compteur:number = 0;

  constructor(private postService: PostService){

  }
  ngOnInit(): void {
    this.testgetRouter();
  }
  handleClick(){
    this.eventClick.emit(this.post.title);
  }

  logMeWords(){
    console.log("Some words");
  }

  testgetRouter(){
    this.postService.getPostsKey().subscribe(details => {
      Object.entries(details).forEach((element :any) => {
        if(this.post.id == element[1].id){
          this.key = element[0];
        }
      });
    })
  }
  // getNgClass(){
  //   if(this.event && this.event.time === '8:00 am'){
  //     return 'purple';
  //   }
  //   return '';
  // }
}
