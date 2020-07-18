import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent{
  followers = [
    { id: 1, name: "Ahmad" },
    { id: 2, name: "Ali"}
  ];
}
