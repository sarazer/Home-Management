import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-memberslist',
  templateUrl: './memberslist.component.html',
  styleUrls: ['./memberslist.component.css']
})
export class MemberslistComponent implements OnInit {
  memberlist:any;
  data:any;

  constructor(private getdata:DataService) { }

  ngOnInit()  {
      this.getmembers()
  }
    getmembers(){
    this.data = this.getdata.getHomeMembers()
    this.data.subscribe(
       res=> {
      this.memberlist=res.json();
      console.log(this.memberlist);
    });
  }

}


