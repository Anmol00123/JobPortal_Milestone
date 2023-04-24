import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobserviceService } from 'src/app/jobservice.service';

@Component({
  selector: 'app-update-job',
  templateUrl: './update-job.component.html',
  styleUrls: ['./update-job.component.css']
})
export class UpdateJobComponent implements OnInit {

  message: string = "";
  constructor(private updateService: JobserviceService, private router: Router) { }

  ngOnInit(): void {
  }

  onUpdate() {
    console.log(this.job);
    return this.updateService.update(this.job).subscribe(data => {
      alert(data)
    })

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
   
    postedDate: "",
   
    active: true
  }

}
