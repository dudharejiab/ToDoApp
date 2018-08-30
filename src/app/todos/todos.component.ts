import { Component, OnInit } from "@angular/core";
import { TodoService } from "../todo.service";
import * as $ from "jquery";
@Component({
  selector: "app-todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.css"]
})
export class TodosComponent implements OnInit {
  todos;
  text;
  appState = "default";
  oldText;
  constructor(private _todoService: TodoService) {}

  ngOnInit() {
    this.todos = this._todoService.getTodos();
  }
//-----------------Add new item to todo list
  addTodo() {
    var newTodo = {
      text: this.text
    };
    console.log(this.text);
    console.log(newTodo);
    this.todos.push(newTodo);
    this._todoService.addTodo(newTodo);
  }
//-----------------delete selected from todo list
  deleteTodo(value) {
    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i].text == value) {
        this.todos.splice(i, 1);
      }
    }
    this._todoService.deleteTodo(value);
  }
//----------------edit the selected item
  editTodo(value) {
    this.appState = "edit";
    this.oldText = value.text;
    this.text = value.text;
    console.log(this.oldText);
    console.log(value);
    console.log(this.text);
    console.log(this.appState);
  }
//---------------update the selected item
  updateTodo() {
    console.log(this.text);
    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i].text == this.oldText) {
        this.todos[i].text = this.text;
      }
    }

    this._todoService.updateTodo(this.oldText,this.text);
  }
}
