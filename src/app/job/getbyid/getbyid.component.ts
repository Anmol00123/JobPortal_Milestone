import { Component, OnInit } from '@angular/core';
import { JobserviceService } from 'src/app/jobservice.service';

@Component({
  selector: 'app-getbyid',
  templateUrl: './getbyid.component.html',
  styleUrls: ['./getbyid.component.css']
})
export class GetbyidComponent implements OnInit {

  constructor(private jobService: JobserviceService) { }

  ngOnInit(): void {
  }

  onGetJob() {
    console.log("Inside get method");
    this.jobService.getJobById(this.job.jobId).subscribe(data => { alert(data) })
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

    postedDate: "",

    active: true
  }
}
