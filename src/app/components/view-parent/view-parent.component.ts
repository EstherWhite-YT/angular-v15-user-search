import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-view-parent',
  templateUrl: './view-parent.component.html',
  styleUrls: ['./view-parent.component.scss'],
})
export class ViewParentComponent implements OnInit {
  value: string = '';
  filteredUsers: User[] = [];
  usersHaveBeenFiltered = false;
  addOnBlur = true;

  ngOnInit(): void {
    this.usersHaveBeenFiltered = false;
    console.log(this.filteredUsers);
  }

  displayedColumns: string[] = ['name', 'email'];
  allUsers: User[] = [
    { name: 'Elona', email: 'sample@gmail.com' },
    { name: 'Elonio', email: 'sample@gmail.com' },
    { name: 'Frisbee', email: 'sample@gmail.com' },
    { name: 'Sunscreen', email: 'sample@gmail.com' },
    { name: 'Chuck Norris', email: 'chuck@noris.com' },
    { name: 'MonaCodeLisa', email: 'monacodelisa@gmail.com' },
  ];

  search() {
    this.usersHaveBeenFiltered = true;

    this.allUsers.map((user) => {
      if (this.value.toLowerCase() === user.name.toLowerCase()) {
        this.filteredUsers.push({
          name: this.value,
          email: 'sample@gmail.com',
        });
      }
      console.log(this.filteredUsers);
    });
  }

  clearSearch() {
    this.value = '';
    this.usersHaveBeenFiltered = false;
    this.filteredUsers = [];
  }
}
