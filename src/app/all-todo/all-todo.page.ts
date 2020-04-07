import { Component, OnInit } from '@angular/core';
import { Todolist } from '../model/todolist';
import { TodoslistService } from '../services/todoslist.service';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import 'firebase/auth';


@Component({
  selector: 'app-all-todo',
  templateUrl: './all-todo.page.html',
  styleUrls: ['./all-todo.page.scss'],
})
export class AllTodoPage implements OnInit {
  todolists: Todolist[] = []
  title: string;


  constructor(private todoslistservice:TodoslistService, 
    private router: Router) { }

  ngOnInit() {
    this.todoslistservice.getByReader(firebase.auth().currentUser.email).subscribe(
      t => { this.todolists=t }
    )
   
  }

  goList(){
    
    this.router.navigate(['/todoslist'])
  }
  addList(){
    let id = firebase.auth().currentUser.email;
    let list = { title: this.title, items: [],owner:id, writer : [].concat(id), reader : [].concat(id)} as Todolist;
    this.todoslistservice.add(list);
    this.router.navigate(['all-todo']);
  }
}
