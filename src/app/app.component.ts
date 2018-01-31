import { Component, ViewEncapsulation, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { TodosService } from './todos.service';
import { ITodoList } from './interface/interface1';
import { ITodoType } from './interface/interface2';
import { TodosDropdownService } from './todos-dropdown.service';
import { CommonFunction } from "./common";

declare const alertify: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  providers: [TodosService],
})

export class AppComponent implements OnInit {
  /**Public variable */
  todosArray: ITodoList[] = [];
  todoType: ITodoType[] = [];

 
  todoModel: ITodoList;
  todoDetail: ITodoList;

  // Using constructor, call the cricketService.
  // this shorthand syntax automatically creates and
  // initializes a new private member in the class
  constructor(private _todoService: TodosService, private _todoDropDown: TodosDropdownService) { }

  ngOnInit() {
    this.todoModel;
    this.todoType = this._todoDropDown.getTodoType();
    this.todosArray = this._todoService.getTodoList();
  }

  cricketModel() {
    /**Define default values */
    return this.todoModel = {
      firstName: '',
      lastName: '',
      todoType: '',
      dob: new CommonFunction().getCurrentDate()
    };
  };

  /**Add a cricket */
  addTodo(values) {
    // values : {
    //   favShot: ""
    //   firstName: ""
    //   lastName: ""
    //   playerType: "",
    //   yearlyIncome: ""
    // }
    this.todoDetail = {
      firstName: values.firstName,
      lastName: values.lastName,
      todoType: values.todoType,
      dob: values.Dob
    };
    // /**Call function from service. */
    this._todoService.addTodo(this.todoDetail);
    // Using 3rd party library to show message.
    alertify.notify('Todos Added Successfully', 'success', 3);
    this._todoService.getTodoList();
  };

}
