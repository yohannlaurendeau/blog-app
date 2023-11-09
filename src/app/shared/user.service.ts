import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../core/model/user.model';

const httpOptions = {
  headers: new HttpHeaders ({
    'Content-Type': 'application/json; charset=UTF-8',
  })
}

@Injectable(
)
export class UserService{
  private userUrl = 'https://jsonplaceholder.typicode.com/users';
  public users!: User[];
  constructor( private http: HttpClient ) {

  }
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl);
  }

  createUser(user: User){
    return this.http.post(this.userUrl,user).subscribe((response) => console.log(response));
  }
  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.userUrl, user, httpOptions)
  }
}
