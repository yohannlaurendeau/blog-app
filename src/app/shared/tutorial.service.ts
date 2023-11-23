import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import Tutorial from '../core/model/tutorial.model';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  private dbPath = '/tutorials';

  tutorialsRef: AngularFireList<Tutorial>;

  constructor(private db: AngularFireDatabase) {
    this.tutorialsRef = db.list(this.dbPath);
  }

  getAll(): Observable<Tutorial[]> {
    return this.tutorialsRef.valueChanges();
  }

  create(tutorial: Tutorial): any {
    return this.tutorialsRef.push(tutorial);
  }

  update(key: string, value: any): Promise<void> {
    return this.tutorialsRef.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.tutorialsRef.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.tutorialsRef.remove();
  }
}
