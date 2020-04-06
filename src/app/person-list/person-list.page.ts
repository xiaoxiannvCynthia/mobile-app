import { Component, OnInit } from '@angular/core';
import { Todolist } from '../model/todolist';
import { TodoslistService } from '../services/todoslist.service';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import 'firebase/auth';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.page.html',
  styleUrls: ['./person-list.page.scss'],
})
export class PersonListPage implements OnInit {
  todolists: Todolist[] = []
  title: string;

  constructor(private todoslistservice:TodoslistService, 
    private router: Router) { }

  ngOnInit() {
    this.todoslistservice.get(firebase.auth().currentUser.email).subscribe(
      t => { this.todolists=t }
    )
  }
  goList(){
    
    this.router.navigate(['/todoslist'])
  }
  addList(){
    let list = { title: this.title, items: [],owner:firebase.auth().currentUser.email} as Todolist;
    this.todoslistservice.add(list);
    this.router.navigate(['all-todo']);
  }

}
