import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { IComment } from "../core/model/comment.model";

@Injectable()
export class CommentService{
  private commentUrl = 'https://jsonplaceholder.typicode.com/comments';
  public testComm! : IComment;
  constructor( private http: HttpClient ) {

  }
  getComments(): Observable<IComment[]> {
    console.log(this.http.get<IComment[]>(this.commentUrl));
    return this.http.get<IComment[]>(this.commentUrl);
  }
  getComment(id: number): Observable<IComment> {
    return this.http.get<IComment>(`${this.commentUrl}/${id}`)
  }
  addComment(comment : IComment): Observable<IComment>{
    return of(comment);
  }
}
