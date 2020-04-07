import { Component, OnInit } from '@angular/core';
import { Todolist } from '../model/todolist';

import { TodoslistService } from '../services/todoslist.service';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-dousers',
  templateUrl: './dousers.page.html',
  styleUrls: ['./dousers.page.scss'],
})
export class DousersPage implements OnInit {

  id:string;
  todolist: Todolist ={items:[],title:" ",owner:"",reader:[], writer:[]};
  writername: string;
  readername: string;


  constructor(
    private todoslistservice:TodoslistService, 
    private router: Router,
    private route: ActivatedRoute,
    ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')
    this.todoslistservice.getById(this.id).subscribe(r=>{
      this.todolist = r
    },err=>{console.log(err)})
    
  }
  addWriter(){
    this.todolist.writer.push(this.writername);
    this.todolist.reader.push(this.writername);
    this.todoslistservice.update(this.todolist,this.id);
    this.router.navigate(['dousers']);
  }
  addReader(){
    this.todolist.reader.push(this.readername);
    this.todoslistservice.update(this.todolist,this.id);
    this.router.navigate(['dousers']);
  }

}
