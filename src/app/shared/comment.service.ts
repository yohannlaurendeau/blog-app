import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { IComment } from "../core/model/comment.model";
import { AngularFireList, AngularFireDatabase } from "@angular/fire/compat/database";

@Injectable({
  providedIn: 'root'
})

export class CommentService{

  private dbPath = '/comment';

  commentRef: AngularFireList<IComment>;

  constructor(private db: AngularFireDatabase) {
    this.commentRef = db.list(this.dbPath);
  }

  getAll(): Observable<IComment[]> {
    return this.commentRef.valueChanges();
  }

  getPostsKey():  Observable<any> {
    return this.db.object('post').valueChanges();
  }
  getPost(id:string): Observable<any>{
    return this.db.object('post/' + id).valueChanges();
  }
  create(user: IComment) {
    return this.commentRef.push(user);
  }

  update(key: string, value: any): Promise<void> {
    return this.commentRef.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.commentRef.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.commentRef.remove();
  }

}
