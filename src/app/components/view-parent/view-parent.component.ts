import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';

import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';

export interface Fruit {
  name: string;
}

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
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  fruits: Fruit[] = [];

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.fruits.push({ name: value });
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(fruit: Fruit): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  edit(fruit: Fruit, event: MatChipEditedEvent) {
    const value = event.value.trim();

    // Remove fruit if it no longer has a name
    if (!value) {
      this.remove(fruit);
      return;
    }

    // Edit existing fruit
    const index = this.fruits.indexOf(fruit);
    if (index >= 0) {
      this.fruits[index].name = value;
    }
  }

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
