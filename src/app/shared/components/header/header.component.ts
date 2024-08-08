import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Output() searchIdChange: EventEmitter<number> = new EventEmitter<number>();
  searchId: number | undefined;

  constructor() {}

  onSearch() {
    this.searchIdChange.emit(this.searchId);
  }
}
