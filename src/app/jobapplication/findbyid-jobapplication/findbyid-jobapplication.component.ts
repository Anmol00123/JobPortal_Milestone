import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobapplicationserviceService } from 'src/app/jobapplicationservice.service';

@Component({
  selector: 'app-findbyid-jobapplication',
  templateUrl: './findbyid-jobapplication.component.html',
  styleUrls: ['./findbyid-jobapplication.component.css']
})
export class FindbyidJobapplicationComponent implements OnInit {

  constructor(private jobapplicationservice:JobapplicationserviceService,private router:Router) { }

  ngOnInit(): void {
  }
  findJob:any={
    jobApplicationId:""
  }

findSubmit(){
  console.log("Finf Job-APPlication************************************")
  console.log("Job-Application searching!!!!!!!!!!!!!!")
  this.jobapplicationservice.findByIdJobApplication(this.findJob).subscribe((data)=>{
    alert(data)
  })
  alert("founded")
}
}
