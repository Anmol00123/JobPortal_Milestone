import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  feed: any = {
    rating: "",
    comment: "",
    createdBy: {
      firstName: "",
      lastName: ""
  
    },
    createdFor: {
      firstName: "",
      lastName: "",
      password: ""
    }
  }
}
