import { Component } from '@angular/core';
import { TodoService } from './todo.service';
import { TodosComponent } from './todos/todos.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // directives: [TodosComponent], 
  providers: [TodoService]
})
export class AppComponent {
  title = 'App Works!';
}
