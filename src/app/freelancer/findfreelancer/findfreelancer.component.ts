import { Component, OnInit } from '@angular/core';
import { FreelancerService } from 'src/app/freelancerservice.service';
import { Freelancer } from 'src/app/jobservice.service';

@Component({
  selector: 'app-findfreelancer',
  templateUrl: './findfreelancer.component.html',
  styleUrls: ['./findfreelancer.component.css']
})
export class FindfreelancerComponent implements OnInit {

  constructor(private freelancerService:FreelancerService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log("save method")
    this.freelancerService.findById(this.free.freelancerId).subscribe(data=>{
      alert(data)
    })
  }
  free: any = {
    freelancerId:"",
    firstName: "",
    lastName: "",
    password: "",
    appliedJobs: [{
      appliedDate: "",
      coverLetter: ""
    }]
  }
}
