import { Component, OnInit } from '@angular/core';
import { FeedbackService } from 'src/app/feedbackservice.service';

@Component({
  selector: 'app-update-feedback',
  templateUrl: './update-feedback.component.html',
  styleUrls: ['./update-feedback.component.css']
})
export class UpdateFeedbackComponent implements OnInit {

  constructor(private feedbackService:FeedbackService ) { }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.feed);
    console.log("Inside update feedback method");
    this.feedbackService.updateFeedback(this.feed).subscribe((data: any) => {
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
    }
  }
}
