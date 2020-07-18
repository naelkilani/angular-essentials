import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, combineLatest } from 'rxjs';

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
    combineLatest([
      this.routes.paramMap,
      this.routes.queryParamMap
    ])
    .subscribe(combined => {
      let id = combined[0].get("id");
      let page = combined[1].get("page");

      //this.service.getAll({ id: id, page: page })
      //.subscribe(followers => this.followers = followers);
    })
  }

}
