import { element } from 'protractor';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export interface LikeChangeEventArgs {
  isLiked: boolean;
}

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {
  @Input('likesCount') likesCount = 0;
  @Input('isActive') isLiked: boolean;
  @Output('change') change = new EventEmitter();
  cursor = "default";

  onMouseHover() {
    this.cursor = "pointer";
  }

  onMouseLeave() {
    this.cursor = "default";
  }

  onClick() {
    this.isLiked = !this.isLiked;
    this.likesCount += (this.isLiked) ? 1 : -1;

    this.change.emit({ isLiked: this.isLiked });
  }
}
