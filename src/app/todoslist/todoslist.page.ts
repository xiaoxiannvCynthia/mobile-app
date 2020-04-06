import { Component, OnInit } from '@angular/core';
import { Todo } from '../model/todo';
import { TodoslistService } from '../services/todoslist.service';
import { Observable } from 'rxjs';
import { Todolist } from '../model/todolist';
import { Router, ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase/app';
import 'firebase/auth';

@Component({
  selector: 'app-todoslist',
  templateUrl: './todoslist.page.html',
  styleUrls: ['./todoslist.page.scss'],
})
export class TodoslistPage implements OnInit {

  private todos$: Observable<Array<Todo>>;
  title: string;
  todolist : Todolist = {items:[],title:" ",owner:"",reader:[],writer:[]}
  id : string

  constructor(private listService: TodoslistService,private route: ActivatedRoute,private router :Router) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.listService.getById(this.id).subscribe(r=>{
      this.todolist = r
    },err=>{console.log(err)})
  }  

  delete(todo: Todo){
   // this.listService.delete(todo);
  }
  addList(){
    let item = { title: this.title, isDone: false,owner: firebase.auth().currentUser.email} as Todo;
    this.todolist.items.push(item);
    
    this.listService.update(this.todolist,this.id);
    console.log("coucou")
    this.router.navigate(['todoslist',this.id]);
  }
}
