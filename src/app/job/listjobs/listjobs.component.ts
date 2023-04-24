import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Job } from 'src/app/jobservice.service';
import { ListjobsService } from 'src/app/listjobs.service';

@Component({
  selector: 'app-listjobs',
  templateUrl: './listjobs.component.html',
  styleUrls: ['./listjobs.component.css']
})
export class ListjobsComponent implements OnInit {

  message: string;
  jobs: Job[] = [];
  constructor(private listService: ListjobsService, private router: Router) { }

  ngOnInit(): any {
    this.listService.getAllJobs().subscribe(response => this.handleSuccessfulResponse(response));
  }

  handleSuccessfulResponse(response) {
    this.jobs = response;
  }
  update(updatejob: Job) {
    this.listService.update(updatejob);
    this.router.navigate(['/updatejob']); //updating the employee
  }

  delete(deljob: Job): any {
    var selction = confirm("Are you sure !!")
    if (selction == true) {
      this.jobs.splice(this.jobs.indexOf(deljob), 1);
      this.listService.deleteJob(deljob.jobId).subscribe(data => {
        alert(data);
      });
    }
    this.router.navigate(['/listjob']);
  }

}
// job: any = {
//   jobId: "",
//   skill: {
//     name: "",
//     description: ""
//   },
//   postedBy: {
//     firstName: "",
//     lastName: ""
//   },
//   // feedbacks : [{
//   //     rating : ,
//   //     comment : 
//   // }],
//   postedDate: "",
//   // awardedTo :[{
//   //     firstName : ,
//   //     lastName : ,
//   //     password : 
//   //  }],
//   active: true
// }
