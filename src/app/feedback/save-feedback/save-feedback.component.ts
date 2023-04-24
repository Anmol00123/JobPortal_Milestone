import { Component, OnInit } from '@angular/core';
import { FeedbackService } from 'src/app/feedbackservice.service';


@Component({
  selector: 'app-save-feedback',
  templateUrl: './save-feedback.component.html',
  styleUrls: ['./save-feedback.component.css']
})
export class SaveFeedbackComponent implements OnInit {

  constructor(private feedbackService:FeedbackService) { }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.feed);
    console.log("Inside add feedback method");
    this.feedbackService.addFeedback(this.feed).subscribe((data: any) => {
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
