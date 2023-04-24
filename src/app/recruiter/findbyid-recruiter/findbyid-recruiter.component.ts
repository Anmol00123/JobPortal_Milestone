import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecruiterserviceService } from 'src/app/recruiterservice.service';

@Component({
  selector: 'app-findbyid-recruiter',
  templateUrl: './findbyid-recruiter.component.html',
  styleUrls: ['./findbyid-recruiter.component.css']
})
export class FindbyidRecruiterComponent implements OnInit {

  constructor(private recruiterservice:RecruiterserviceService,private router:Router) { }

  ngOnInit(): void {
  }
  findingRecruiter:any={
    recruiterId:""
  }

  findSubmit(){
    console.log("Finding Recruiter************************************")
    this.recruiterservice.findByIdRecruiter(this.findingRecruiter)
    alert("Recruiter Found successfully")  }

  }

