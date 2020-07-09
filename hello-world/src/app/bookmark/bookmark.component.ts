import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.css']
})
export class BookmarkComponent implements OnInit {
  isFavourite: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.isFavourite = !this.isFavourite;
  }

}
