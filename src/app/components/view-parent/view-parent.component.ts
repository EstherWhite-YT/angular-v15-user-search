import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-view-parent',
  templateUrl: './view-parent.component.html',
  styleUrls: ['./view-parent.component.scss'],
})
export class ViewParentComponent implements OnInit {
  searchTerm: string = '';
  filteredUsers: User[] = [];
  usersHaveBeenFiltered = false;
  addOnBlur = true;

  ngOnInit(): void {
    this.usersHaveBeenFiltered = false;
    console.log(this.filteredUsers);
  }

  displayedColumns: string[] = ['name', 'email'];
  allUsers: User[] = [
    { name: 'Elona Muskina', email: 'elonamuskina@gmail.com' },
    { name: 'Elonio Muskoni', email: 'eloniomuskoni@gmail.com' },
    { name: 'Frisbee', email: 'frisbee@gmail.com' },
    { name: 'Sunscreen', email: 'sunscreen@gmail.com' },
    { name: 'Chuck Norris', email: 'chuck@noris.com' },
    { name: 'EstherSoftwareDev', email: 'esthersoftwaredev@gmail.com' },
  ];

  search() {
    this.usersHaveBeenFiltered = true;

    this.allUsers.map((user) => {
      if (user.name.toLowerCase().includes(this.searchTerm.toLowerCase())) {
        this.filteredUsers.push({
          name: user.name,
          email: user.email,
        });
      }
      // console.log(this.filteredUsers);
    });
  }

  clearSearch() {
    this.usersHaveBeenFiltered = false;
    this.filteredUsers = [];
    this.searchTerm = '';
  }
}
