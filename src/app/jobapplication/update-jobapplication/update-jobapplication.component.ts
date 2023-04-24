import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobapplicationserviceService } from 'src/app/jobapplicationservice.service';

@Component({
  selector: 'app-update-jobapplication',
  templateUrl: './update-jobapplication.component.html',
  styleUrls: ['./update-jobapplication.component.css']
})
export class UpdateJobapplicationComponent implements OnInit {

  constructor( private jobapplicationservice:JobapplicationserviceService,private router:Router) { }

  ngOnInit(): void {
  }
  updateJob:any={
    jobApplicationId:1,
    postedJobs:{
        active:true,
        postedDate:""
    },
    appliedDate:"",
    coverLetter:""
  }
  updateSubmit(){
    console.log("Updated Job-APPlication************************************")
    console.log("Job-Application updated!!!!!!!!!!!!!!")
    this.jobapplicationservice.updateApplication(this.updateJob).subscribe((data)=>{
      alert(data)
    })
    console.log(this.updateJob);
     alert(this.updateJob);

  }
}
