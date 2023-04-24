import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecruiterserviceService } from 'src/app/recruiterservice.service';

@Component({
  selector: 'app-update-recruiter',
  templateUrl: './update-recruiter.component.html',
  styleUrls: ['./update-recruiter.component.css']
})
export class UpdateRecruiterComponent implements OnInit {

  constructor(private recruiterservice:RecruiterserviceService,private router:Router) { }

  ngOnInit(): void {
  }

  updatingRecruiter:any={
    recruiterId:"",
    firstName:"",
    lastName:""
  }
updateSubmit(){
  console.log("Recruiter updating************************************")
  this.recruiterservice.updateRecruiter(this.updatingRecruiter).subscribe((data)=>{
    alert(data)
  })
  console.log(this.updatingRecruiter)
    console.log("Recruiter Added succsessfully!!!!!!!!!!!!!!")
    alert("Recruiter Added successfully")

}
}
