import { Injectable } from '@angular/core';
import { Init } from './init-todos';

@Injectable({
  providedIn: 'root'
})
export class TodoService extends Init{

  constructor() { 
    super();
    console.log("todo service initialized!!!");
    this.load();
  }

  getTodos(){
    var todos = JSON.parse(localStorage.getItem('todos'));
    return todos;
  }
//-----------------------------Add new item to Todo list
  addTodo(newTodo){
    var todos = JSON.parse(localStorage.getItem('todos'));
    //Add New Todo to the original object
    todos.push(newTodo);
    //set new todo to localstorage
    localStorage.setItem('todos',JSON.stringify(todos));
  }
//---------------------------Delete selected item from todo list
  deleteTodo(todoText){
    var todos = JSON.parse(localStorage.getItem('todos'));
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].text == todoText) {
        todos.splice(i, 1);
      }
    }
    //Set new Todos in localstorage
    localStorage.setItem('todos',JSON.stringify(todos));
  }
//---------------------------UpdateTodo list
  updateTodo(oldText,newText){
    var todos = JSON.parse(localStorage.getItem('todos'));

    for (let i = 0; i < todos.length; i++) {
      if (todos[i].text == oldText) {
        todos[i].text = newText;
      }
    }
    //Set New Todos in localstorage
    localStorage.setItem('todos',JSON.stringify(todos));
  }

}
