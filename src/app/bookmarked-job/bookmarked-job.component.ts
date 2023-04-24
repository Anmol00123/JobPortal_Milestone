import { Component, OnInit } from '@angular/core';
import { BookmarkedJobService } from '../bookmarked-job.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-bookmarked-job',
  templateUrl: './bookmarked-job.component.html',
  styleUrls: ['./bookmarked-job.component.css']
})
export class BookmarkedJobComponent implements OnInit {
  bookmarkedJobId: number
  constructor(private router: Router, private route: ActivatedRoute, private bookmarkJobService:BookmarkedJobService) { }



  ngOnInit(): void {
  }

}
