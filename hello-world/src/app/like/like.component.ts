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
  @Input('isActive') isActive: boolean;
  @Output('change') change = new EventEmitter();

  onClick() {
    this.isActive = !this.isActive;
    this.likesCount += (this.isActive) ? 1 : -1;

    this.change.emit({ isLiked: this.isActive });
  }
}
