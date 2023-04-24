import { Component, OnInit } from '@angular/core';
import { BookmarkedJobService } from 'src/app/bookmarked-job.service';

@Component({
  selector: 'app-find-by-id',
  templateUrl: './find-by-id.component.html',
  styleUrls: ['./find-by-id.component.css']
})
export class FindByIdComponent implements OnInit {

  constructor(private bookmarkService: BookmarkedJobService) { }

  ngOnInit(): void {
  }
  onFindById(bookmarkForm: number) {
    console.log("message")
    this.bookmarkService.getById(bookmarkForm).subscribe(data => {
      alert(data)
    })
  }


}
