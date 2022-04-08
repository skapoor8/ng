/* 
* Purpose:  Ilustrates arrays in ts, and working with *ngFor
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  names: string[];

  constructor() {
    this.names = ['Julia', 'Bilbo', 'Honeybee', 'Andy', 'Leslie'];
  }

  ngOnInit(): void {
  }

}
