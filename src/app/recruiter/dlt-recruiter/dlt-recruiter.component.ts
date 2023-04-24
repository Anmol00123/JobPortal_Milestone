import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecruiterserviceService } from 'src/app/recruiterservice.service';

@Component({
  selector: 'app-dlt-recruiter',
  templateUrl: './dlt-recruiter.component.html',
  styleUrls: ['./dlt-recruiter.component.css']
})
export class DltRecruiterComponent implements OnInit {

  constructor(private recruiterservice: RecruiterserviceService, private router: Router) { }

  ngOnInit(): void {
  }

  deleteRecruiter: any = {
    recruiterId: ""
  }
  dltSubmit() {
    console.log("Delete Recruiter************************************")
    this.recruiterservice.dltRecruiter(this.deleteRecruiter)
    alert("Recruiter deleted successfully")
  }

}


