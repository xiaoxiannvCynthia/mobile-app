import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Todo } from '../model/todo';
import { TodoslistService } from '../services/todoslist.service';
import { Todolist } from '../model/todolist';

@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.page.html',
  styleUrls: ['./addtodo.page.scss'],
})
export class AddtodoPage implements OnInit {

  title: string;
  todolist : Todolist
  id:string

  constructor(private listService: TodoslistService,
    private route: ActivatedRoute,private router :Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')
    this.listService.getById(this.id).subscribe(r=>{
      this.todolist = r
    },err=>{console.log(err)})
  }

  addList(){
    let item = { title: this.title, isDone: false } as Todo;
    this.todolist.items.push(item);
    
    this.listService.update(this.todolist,this.id);
    console.log("coucou")
    this.router.navigate(['todoslist',this.id]);
  }
}
