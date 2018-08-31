import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MemberslistComponent } from './memberslist/memberslist.component';
import { TodoListComponent } from './todolist/todolist.component';
import { HttpModule } from '@angular/http';
import { DataService } from './data.service';
import { AddTodoListComponent } from './addtodolist/addtodolist.component';
@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    MemberslistComponent,
    AddTodoListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      {
          path: '',
          component: TodoListComponent
      },
      {
          path: 'memberslist',
          component: MemberslistComponent
      },
      {
          path:'addTodoList',
          component: AddTodoListComponent
      }
  ])
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
