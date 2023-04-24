import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobapplicationserviceService } from 'src/app/jobapplicationservice.service';

@Component({
  selector: 'app-add-jobapplication',
  templateUrl: './add-jobapplication.component.html',
  styleUrls: ['./add-jobapplication.component.css']
})
export class AddJobapplicationComponent implements OnInit {

  constructor( private jobapplicationservice:JobapplicationserviceService,private router:Router) { }

  ngOnInit(): void {
  }
  applyJob:any={
    jobApplicationId:1,
    postedJobs:{
        active:true,
        postedDate:""
    },
    appliedDate:"",
    coverLetter:""
  }

  onSubmit(){
    console.log("Applied Job-APPlication************************************")
     console.log("Job-Application saved!!!!!!!!!!!!!!")
      this.jobapplicationservice.applyToJobApplication(this.applyJob).subscribe((data)=>{
        alert(data);
      })
     console.log(this.applyJob);
     alert(this.applyJob);
  }

}