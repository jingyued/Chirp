import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-admin-user-list',
  templateUrl: './admin-user-list.component.html',
  styleUrls: ['./admin-user-list.component.sass']
})
export class AdminUserListComponent implements OnInit {

  selectedIndex: number | undefined;
  usersList: User[] = [];
  selectedUser: User | undefined;

  constructor(private users: UserService, private auth: AuthService) { }

  ngOnInit(): void {
    this.users.getAllData().subscribe((res) => {
      this.usersList = [...res];
    });
  }

  onAddNew(){
    console.log('gonna add new');
  }

  onSelectUser(index: number){
    this.selectedIndex = index;
    this.selectedUser = this.usersList[index];
  }

  onDeleteUser(index: number){
    // TODO: find a way to change this deprecated line
    event?.stopPropagation();
    console.log(`gonna delete #${this.usersList[index]._id}`);
  }
}
