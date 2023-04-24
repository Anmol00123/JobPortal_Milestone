import { Component, OnInit } from '@angular/core';
import { BookmarkedFreelancerService } from 'src/app/bookmarked-freelancer.service';

@Component({
  selector: 'app-addbookmark',
  templateUrl: './addbookmark.component.html',
  styleUrls: ['./addbookmark.component.css']
})
export class AddbookmarkComponent implements OnInit {

  constructor(private bookmarkFreelancer: BookmarkedFreelancerService) { }

  ngOnInit(): void {
  }

  onAdd() {
    console.log("Bookmarking a freelancer");
    this.bookmarkFreelancer.addBookmark(this.bookmarkedFreelancer).subscribe(data=> {
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
    }
  }
}
