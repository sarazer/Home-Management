import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodoListComponent implements OnInit {
  todolist: any;
  data: any;
  constructor(private getdata: DataService) { }

  ngOnInit() {
    this.gettasks()
  }
  gettasks() {
    this.data = this.getdata.getTodoList()
    this.data.subscribe(
      res => {
        this.todolist = res.json();
        console.log(this.todolist);
      });
  }
}

