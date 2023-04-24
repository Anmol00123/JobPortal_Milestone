import { Component, OnInit } from '@angular/core';
import { BookmarkedFreelancerService } from 'src/app/bookmarked-freelancer.service';

@Component({
  selector: 'app-removebookmark',
  templateUrl: './removebookmark.component.html',
  styleUrls: ['./removebookmark.component.css']
})
export class RemovebookmarkComponent implements OnInit {

  message: string = "";
  constructor(private bookmarkFreelancer: BookmarkedFreelancerService) { }

  ngOnInit(): void {
  }
  onDelete() {
    console.log("Bookmarking a freelancer");
    this.bookmarkFreelancer.addBookmark(this.bookmarkedFreelancer).subscribe(data => {
      alert(data);
    })
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
    },
    id: ""
  }
}
