import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { TaskComponent } from './task/task.component';
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, UserComponent, TaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-first-app';
  users = DUMMY_USERS;
  selectedUserId = 'u1';

  get selectedUser(){
    return this.users.find((user) => user.id === this.selectedUserId)!;
  }

  onSelectedUser(id: string){
    this.selectedUserId = id;
  }
}
