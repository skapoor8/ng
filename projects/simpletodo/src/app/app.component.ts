import { Component } from '@angular/core';
import { TodoList  } from './todoList';
import { TodoItem } from './todoItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newItem: string = '';
  showComplete: boolean = false;

  private list = new TodoList("Bob", [
    new TodoItem('Go for run', true),
    new TodoItem('Get flowers'),
    new TodoItem('Collect tickets')
  ]);

  // props
  get username(): string {
    return this.list.user;
  }

  get itemCount(): number {
    return this.items.length;
  }

  get items() : readonly TodoItem[] {
    return this.list.items.filter(todo => !this.showComplete || todo.complete);
  }

  // event handlers
  addItem(newItem: string) {
    if (newItem != '') {
      this.list.addItem(newItem);
      this.newItem = '';
    } 
  }
}
