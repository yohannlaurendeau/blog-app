import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPost } from 'src/app/core/model/post.model';

@Component({
  selector: 'app-feed-post',
  templateUrl: './feed-post.component.html',
  styleUrls: ['./feed-post.component.css']
})
export class FeedPostComponent{
  @Input() post!: IPost;
  @Output() eventClick = new EventEmitter();
  value = "testvalue";

  handleClick(){
    this.eventClick.emit(this.post.title);
  }

  logMeWords(){
    console.log("Some words");
  }
  // getNgClass(){
  //   if(this.event && this.event.time === '8:00 am'){
  //     return 'purple';
  //   }
  //   return '';
  // }
}
