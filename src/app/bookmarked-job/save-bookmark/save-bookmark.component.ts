import { Component, OnInit } from '@angular/core';
import { BookmarkedJobService } from 'src/app/bookmarked-job.service';
import { BookmarkedJob } from 'src/app/jobservice.service';



@Component({
  selector: 'app-save-bookmark',
  templateUrl: './save-bookmark.component.html',
  styleUrls: ['./save-bookmark.component.css']
})
export class SaveBookmarkComponent implements OnInit {

  constructor(private bookmarkService:BookmarkedJobService) { }

  ngOnInit(): void {
  }
  onSave(bookmarkForm:BookmarkedJob) { 
    console.log("message")
    this.bookmarkService.saveBookmark(bookmarkForm).subscribe(data =>{
      alert(data)
    })
  }
}

