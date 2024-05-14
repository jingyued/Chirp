import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user';
import { AuthService } from 'src/app/core/services/auth.service';
import { AdminService } from 'src/app/features/admin/services/admin.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.sass']
})
export class AdminPanelComponent implements OnInit {

  selectedIndex: number | undefined;
  usersList: User[] = [];
  selectedUser: User | undefined;

  constructor(private adminService: AdminService, private authService: AuthService) { }

  // fetch all the users
  ngOnInit(): void {
    this.adminService.getAllData().subscribe((res) => {
      this.usersList = [...res];
    });
  }

  // add new user, will be implemented later
  onAddNew(){
    console.log('gonna add new');
  }

  // select one user and get the user's info
  onSelectUser(index: number){
    this.selectedIndex = index;
    this.selectedUser = this.usersList[index];
  }

  // delete user, will also implement the method to delete from backend
  onDeleteUser(index: number){
    // TODO: find a way to change this deprecated line
    event?.stopPropagation();
    console.log(`gonna delete #${this.usersList[index]._id}`);
  }
}
