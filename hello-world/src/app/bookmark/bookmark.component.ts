import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.css']
  //inputs: ['isFavourite'] 
})
export class BookmarkComponent implements OnInit {
  @Input('isFavourite') isFavourite: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.isFavourite = !this.isFavourite;
  }

}
