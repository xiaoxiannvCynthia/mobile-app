import { Component, OnInit } from '@angular/core';
import { TodoslistService } from '../services/todoslist.service';
import { Router } from '@angular/router';
import { Todolist } from '../model/todolist';
import * as firebase from 'firebase/app';
import 'firebase/auth';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.page.html',
  styleUrls: ['./add-list.page.scss'],
})
export class AddListPage implements OnInit {

  title: string;

  

  constructor(private listService: TodoslistService,
    private router: Router) { }

  ngOnInit() {
  }

  addList(){
    let list = { title: this.title, items: [],owner:firebase.auth().currentUser.email} as Todolist;
    this.listService.add(list);
    this.router.navigate(['all-todo']);
  }

}
