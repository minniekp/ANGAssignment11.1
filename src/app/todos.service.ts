import { Injectable } from '@angular/core';
import { ITodoList } from './interface/interface1';
import { ITodoType } from './interface/interface2';
import { CommonFunction } from "./common";

@Injectable()
export class TodosService {

  private todosList: ITodoList[] = [];

  /** Add todo in the array List. */
  addTodo(todoDetail: ITodoList) {
    this.todosList.unshift(todoDetail);
  };

  /**Get the todo list from the array. */
  getTodoList(): ITodoList[] {
    return this.todosList;
  };

}
