import { LikeChangeEventArgs } from './like/like.component';
import { FavouriteChangeEventArgs } from './bookmark/bookmark.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    title: "Title",
    isFavourite: true,
    isLiked: true,
    likesCount: 10
  };

  title = 'hello-world';

  onFavouriteChange(eventArgs: FavouriteChangeEventArgs) {
    console.log('Favourite Changed.', eventArgs.newValue);
  }

  onLikeChange(eventArgs: LikeChangeEventArgs) {
    console.log('Like Changed.', eventArgs.isLiked)
  }
}
 