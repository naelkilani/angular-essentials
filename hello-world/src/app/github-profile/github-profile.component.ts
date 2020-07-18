import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {
  id: number;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.paramMap.get("id");

    this.route.paramMap.subscribe(params => {
     this.id = +params.get("id");
      console.log(this.id);
    });
  }

  submit() {
    this.router.navigate(["/followers"],
    {
      queryParams: {
        page : 1,
        order: "newest"
      }
    });
  }

}
