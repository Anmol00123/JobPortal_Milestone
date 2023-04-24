import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobserviceService } from 'src/app/jobservice.service';

@Component({
  selector: 'app-addjob',
  templateUrl: './addjob.component.html',
  styleUrls: ['./addjob.component.css']
})
export class AddjobComponent implements OnInit {
  message: string = "";
  constructor(private jobService: JobserviceService, private router: Router) {

  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.job);
    console.log("Inside add job method");
    this.jobService.addJob(this.job).subscribe((data: any) => {
      alert(data);
    })
  }

  job: any = {
    jobId: "",
    skill: {
      name: "",
      description: ""
    },
    postedBy: {
      firstName: "",
      lastName: ""
    },
    // feedbacks : [{
    //     rating : ,
    //     comment : 
    // }],
    postedDate: "",
    // awardedTo :[{
    //     firstName : ,
    //     lastName : ,
    //     password : 
    //  }],
    active: true
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

    }

  }

}
