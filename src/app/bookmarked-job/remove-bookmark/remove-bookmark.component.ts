import { Component, OnInit } from '@angular/core';
import { BookmarkedJobService } from 'src/app/bookmarked-job.service';
import { BookmarkedJob } from 'src/app/jobservice.service';

@Component({
  selector: 'app-remove-bookmark',
  templateUrl: './remove-bookmark.component.html',
  styleUrls: ['./remove-bookmark.component.css']
})
export class RemoveBookmarkComponent implements OnInit {

  constructor(private bookmarkService:BookmarkedJobService) { }

  ngOnInit(): void {
  }
  onRemove(){ 
    console.log("message")
    this.bookmarkService.removeBookmark(this.bookmarkedJob).subscribe(data =>{
      alert(data)
    })
    
  }
  bookmarkedJob: any = {
    skill: {
      name: "",
      description: ""

    },
    job: {
      skill: "",
      postedDate: "",
      awardedTo: "",
      active: "",
      jobApplications: [],

    },
    id:""

  }

}
