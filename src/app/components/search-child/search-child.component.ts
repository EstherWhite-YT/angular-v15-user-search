import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-child',
  templateUrl: './search-child.component.html',
  styleUrls: ['./search-child.component.scss'],
})
export class SearchChildComponent {
  
  @Output() newItemEvent = new EventEmitter();

  clearSearchChild() {
    this.newItemEvent.emit();
  }
}
