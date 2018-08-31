import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-addtodolist',
  templateUrl: './addtodolist.component.html',
  styleUrls: ['./addtodolist.component.css']
})
export class AddTodoListComponent implements OnInit {
  newTask: string = '';
  newMember: string = '';
  memberId: number;
  memberlist: any;
  data: any;
  message: any;

  constructor(private getdata: DataService) { }

  ngOnInit() {
    this.getmembers()
  }
  getmembers() {
    this.data = this.getdata.getHomeMembers()
    this.data.subscribe(
      res => {
        this.memberlist = res.json();
      });
  }

  addTodoList(): void {
    for (var i = 0; i < this.memberlist.length; i++){
      if (this.memberlist[i].memberNickname == this.newMember){
        this.memberId = this.memberlist[i].memberId;
      }  
    }

    this.getdata.addTodoList({task: this.newTask, member: this.memberId})
    .subscribe(
        response=> this.message="Todo added successfully!",
        err=> this.message=err.toString()
    )
  }
}
