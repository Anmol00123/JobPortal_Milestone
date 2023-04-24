import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecruiterserviceService } from 'src/app/recruiterservice.service';

@Component({
  selector: 'app-add-recruiter',
  templateUrl: './add-recruiter.component.html',
  styleUrls: ['./add-recruiter.component.css']
})
export class AddRecruiterComponent implements OnInit {

  constructor(private recruiterservice: RecruiterserviceService, private router: Router) { }

  ngOnInit(): void {
  }
  addingRecruiter: any = {
    recruiterId: "",
    firstName: "",
    lastName: ""
  }
  addSubmit() {
    console.log("Recruiter Saving**************************")
    console.log("Recruiter saving!!!!!!!!!!!!!!")
    this.recruiterservice.addRecruiter(this.addingRecruiter).subscribe((data) => {
      alert(data)
    })
    console.log(this.addingRecruiter)
    console.log("Recruiter Added succsessfully!!!!!!!!!!!!!!")
    alert("Recruiter Added successfully")
  }

}
