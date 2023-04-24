import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobapplicationserviceService } from 'src/app/jobapplicationservice.service';

@Component({
  selector: 'app-dlt-jobapplication',
  templateUrl: './dlt-jobapplication.component.html',
  styleUrls: ['./dlt-jobapplication.component.css']
})
export class DltJobapplicationComponent implements OnInit {

  constructor(private jobapplicationservice:JobapplicationserviceService,private router:Router) { }

  ngOnInit(): void {
  }
  deleteJob:any={
    jobApplicationId:""
  }
  dltJobAppSubmit(){
    console.log("Delete Job-APPlication************************************")
    console.log("Job-Application Deleted!!!!!!!!!!!!!!")
    this.jobapplicationservice.dltJobApplication(this.deleteJob)//.subscribe((data)=>{
    //   alert(data)
    // })
    alert("Job Application deleted successfully")  }
}
