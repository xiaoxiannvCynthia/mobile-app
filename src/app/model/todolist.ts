import {Todo} from './todo'
export interface Todolist {    
    id?: string;
    title: string;
    items:Todo[];
    owner:string;
    reader:string[];
    writer:string[];
  
  }