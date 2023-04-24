import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookmarked-freelancer',
  templateUrl: './bookmarked-freelancer.component.html',
  styleUrls: ['./bookmarked-freelancer.component.css']
})
export class BookmarkedFreelancerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  bookmarkedFreelancer: any = {
    skill: {
      name: "",
      description: ""
    },
    freelancer: {
      firstName: "",
      lastName: "",
      password: ""
    },
    bookmarkedBy: {
      firstName: "",
      lastName: ""
    }
  }
}
