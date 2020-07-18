import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit{
  constructor(private routes: ActivatedRoute) {
  }
  
  followers = [
    { id: 1, name: "Ahmad" },
    { id: 2, name: "Ali"}
  ];

  ngOnInit(): void {
    this.routes.queryParamMap.subscribe(params => {
      console.log(params.keys);
    });
  }

}
