import { Component, OnInit } from '@angular/core';
import { BookmarkedFreelancerService } from 'src/app/bookmarked-freelancer.service';

@Component({
  selector: 'app-findbyskill',
  templateUrl: './findbyskill.component.html',
  styleUrls: ['./findbyskill.component.css']
})
export class FindbyskillComponent implements OnInit {
  message: string = "";
  constructor(private bookmarkFreelancer: BookmarkedFreelancerService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log("Bookmarking a freelancer");
    this.bookmarkFreelancer.findBySkill(this.bookmarkedFreelancer).subscribe(data => {
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
