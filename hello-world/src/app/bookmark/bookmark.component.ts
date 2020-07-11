import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export interface FavouriteChangeEventArgs {
  newValue: boolean;
}

@Component({
  selector: 'bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.css']
  //inputs: ['isFavourite'] 
})
export class BookmarkComponent implements OnInit {
  @Input('isFavourite') isFavourite: boolean;
  @Output('change') change = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
 
  onClick() {
    this.isFavourite = !this.isFavourite;
    this.change.emit({ newValue: this.isFavourite });
  }
}
