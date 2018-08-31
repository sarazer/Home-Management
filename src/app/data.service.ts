import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'

import { Http, Response } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: Http) { }

  getTodoList(): Observable<any> {
    return this.http.get("/task");
  }
  getHomeMembers(): Observable<any> {
    return this.http.get("/member");
  }
  addTodoList(addtaskData:any): Observable<any> {
    return this.http.post('/addtask', addtaskData);
  }
}
