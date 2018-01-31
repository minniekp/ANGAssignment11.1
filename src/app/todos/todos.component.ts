import { Component, OnInit, Input,OnChanges, DoCheck } from '@angular/core';
import { ITodoList } from '../interface/interface1';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  @Input() todoDetail: ITodoList[];

  constructor() { }

  ngOnInit() {
  }

}
