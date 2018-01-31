import { Injectable } from '@angular/core';
import { ITodoType } from './interface/interface2';

@Injectable()
export class TodosDropdownService {

  todoType: ITodoType[] = [];

  /** Get the player Type */
  getTodoType() {
    return this.todoType = [{
      id: 1,
      type: 'Learn Angular'
    },
    {
      id: 1,
      type: 'Learn React'
    }, {
      id: 1,
      type: 'Learn MondoDB'
    }
    ];
  }

}