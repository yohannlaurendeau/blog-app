import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { IPost } from "../core/model/post.model";
import { AngularFireDatabase, AngularFireList } from "@angular/fire/compat/database";

@Injectable({
  providedIn: 'root'
})

export class PostService{

  private dbPath = '/post';

  postRef: AngularFireList<IPost>;

  constructor(private db: AngularFireDatabase) {
    this.postRef = db.list(this.dbPath);
  }

  getAll(): Observable<IPost[]> {
    return this.postRef.valueChanges();
  }

  getPostsKey():  Observable<any> {
    return this.db.object('post').valueChanges();
  }
  getPost(id:string): Observable<any>{
    return this.db.object('post/' + id).valueChanges();
  }
  create(user: IPost) {
    return this.postRef.push(user);
  }

  update(key: string, value: any): Promise<void> {
    return this.postRef.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.postRef.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.postRef.remove();
  }

}
