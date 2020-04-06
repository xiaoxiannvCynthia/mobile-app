import { Injectable } from '@angular/core';
import { Todo } from '../model/todo';
import { Todolist} from '../model/todolist'
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoslistService {

  private todosCollection: AngularFirestoreCollection<Todolist>;

  private todos: Observable<Array<Todolist>>;
  
  constructor(private db: AngularFirestore) {
    this.todosCollection = db.collection<Todolist>('todos');
 
    this.todos = this.todosCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }
  getByReader(email:string):Observable<Array<Todolist>>{
    return this.db.collection<Todolist>('todos',ref =>ref.where('reader','array-contains',email)).snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        })
      })
    )
  }
  
  getByWriter(email:string):Observable<Array<Todolist>>{
    return this.db.collection<Todolist>('todos',ref =>ref.where('writer','array-contains',email)).snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        })
      })
    )
  }
  get(email:string): Observable<Array<Todolist>> {
    return this.db.collection<Todolist>('todos',ref =>ref.where('owner','==',email)).snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        })
      })
    )
  }
  getAll(): Observable<Array<Todolist>> {
    return this.db.collection<Todolist>('todos').snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        })
      })
    )
  }
  getById(id:string) :Observable<Todolist>{
    return this.todosCollection.doc<Todolist>(id).snapshotChanges().pipe(
      map(a => {
          const data = a.payload.data();
          const id = a.payload.id;
          return { id, ...data };
      })
    );
  }
  

  add(todo: Todolist) {
    return this.todosCollection.add(todo);
  }

  update(todo: Todolist,id:string) {
    return this.todosCollection.doc<Todolist>(id).update(todo)
  }

  delete(todo: Todolist){
    return this.todosCollection.doc(todo.id).delete();
  }

}
