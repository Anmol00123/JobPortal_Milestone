import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobserviceService } from '../jobservice.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

  message: string = "";
  constructor(private jobService: JobserviceService, private router: Router) {

  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log("Inside add job method");
    this.jobService.addJob(this.job).subscribe((data: any) => {
      alert(data);
    })
    console.log(this.job);
  }
 

  job: any = {
    jobId: 0,
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
}

// export class Job {
//   jobId: number;
//   skill: Skill;
//   postedBy: Recruiter;
//   postedDate: Date;
//   awardedTo: Freelancer;
//   active: boolean;
// }

