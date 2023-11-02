import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { IPost } from "../core/model/post.model";

const httpOptions = {
  headers: new HttpHeaders ({
    'Content-Type': 'application/json; charset=UTF-8',
  })
}

@Injectable()
export class PostService{
  private postUrl = 'https://jsonplaceholder.typicode.com/posts';
  public testPost! : IPost;
  constructor( private http: HttpClient ) {

  }
  getPosts(): Observable<IPost[]> {
    console.log(this.http.get<IPost[]>(this.postUrl));
    return this.http.get<IPost[]>(this.postUrl);
  }
  getPost(id: number): Observable<IPost> {
    return this.http.get<IPost>(`${this.postUrl}/${id}`)
  }
  addPost(post: IPost): Observable<IPost> {
    return of(post);
  }

}
