import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../core/model/user.model';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';



@Injectable({
  providedIn: 'root'
})

export class UserService{

  private dbPath = '/user';

  userRef: AngularFireList<User>;

  constructor(private db: AngularFireDatabase) {
    this.userRef = db.list(this.dbPath);
  }

  getAll(): Observable<User[]> {
    return this.userRef.valueChanges();
  }

  create(user: User) {
    return this.userRef.push(user);
  }

  update(key: string, value: any): Promise<void> {
    return this.userRef.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.userRef.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.userRef.remove();
  }

}

