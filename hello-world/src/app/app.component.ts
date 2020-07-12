import { LikeChangeEventArgs } from './like/like.component';
import { FavouriteChangeEventArgs } from './bookmark/bookmark.component';
import { Component } from '@angular/core';

enum ViewMode {
  Map = 1,
  List = 2
}

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

  courses: any[];

  loadCourses() {
    this.courses = [
      { id: 1, name: 'course1'},
      { id: 2, name: 'course2'},
      { id: 3, name: 'course3'}
    ];
  }

  onRemove(id: number) {
    let course = this.courses.find(course => course.id == id);
    this.courses.splice(this.courses.indexOf(course), 1)
  }

  title = 'hello-world';
  ViewMode = ViewMode;
  viewMode = ViewMode.Map;

  onFavouriteChange(eventArgs: FavouriteChangeEventArgs) {
    console.log('Favourite Changed.', eventArgs.newValue);
  }

  onLikeChange(eventArgs: LikeChangeEventArgs) {
    console.log('Like Changed.', eventArgs.isLiked)
  }

  trackCourse(index, course) {
    return course ? course.id : undefined;
  }
}
 