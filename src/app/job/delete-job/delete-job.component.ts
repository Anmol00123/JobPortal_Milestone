import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobserviceService } from 'src/app/jobservice.service';

@Component({
  selector: 'app-delete-job',
  templateUrl: './delete-job.component.html',
  styleUrls: ['./delete-job.component.css']
})
export class DeleteJobComponent implements OnInit {

  message: string = "";
  constructor(private deleteService: JobserviceService, private router: Router) {

  }
  onDelete() {
    console.log("In delete job component")
    this.deleteService.deleteJob(this.job.jobId).subscribe(data => {
      alert(data);
    })
  }
  ngOnInit(): void {
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
