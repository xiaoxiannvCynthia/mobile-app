import { Component, OnInit } from '@angular/core';
import { Todolist } from '../model/todolist';
import { TodoslistService } from '../services/todoslist.service';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import 'firebase/auth';

@Component({
  selector: 'app-dousers',
  templateUrl: './dousers.page.html',
  styleUrls: ['./dousers.page.scss'],
})
export class DousersPage implements OnInit {

  todolists: Todolist[] = []
  title: string;
  readername: string;


  constructor(private todoslistservice:TodoslistService, 
    private router: Router) { }

  ngOnInit() {
    this.todoslistservice.get(firebase.auth().currentUser.email).subscribe(
      t => { this.todolists=t }
    )
  }
  addList(){
    let list = { items: [],writer: [].concat(this.title),owner:firebase.auth().currentUser.email} as Todolist;
    this.todoslistservice.add(list);
    this.router.navigate(['dousers']);
  }
  addReader(){
    let list = { items: [],reader: [].concat(this.readername),owner:firebase.auth().currentUser.email} as Todolist;
    this.todoslistservice.add(list);
    this.router.navigate(['dousers']);
  }

}
