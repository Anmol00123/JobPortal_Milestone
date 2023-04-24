import { Component, OnInit } from '@angular/core';
import { FeedbackService } from 'src/app/feedbackservice.service';

@Component({
  selector: 'app-get-feedback',
  templateUrl: './get-feedback.component.html',
  styleUrls: ['./get-feedback.component.css']
})
export class GetFeedbackComponent implements OnInit {

  constructor(private feedbackService:FeedbackService) { }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.feed);
    console.log("Inside get feedback method");
    this.feedbackService.getFeedback(this.feed.id).subscribe((data: any) => {
      alert(data);
    })
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
    },
    id:""
  }
}
