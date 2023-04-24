import { Component, OnInit } from '@angular/core';
import { FreelancerService } from 'src/app/freelancerservice.service';

@Component({
  selector: 'app-savefreelancer',
  templateUrl: './savefreelancer.component.html',
  styleUrls: ['./savefreelancer.component.css']
})
export class SavefreelancerComponent implements OnInit {

  constructor(private freelancerService: FreelancerService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log("save method")
    console.log(this.free)
    console.log(this.free.appliedJobs.appliedDate)
    this.freelancerService.createFreelancer(this.free).subscribe(data => {
      alert(data)
    })
  }
  free: any = {
    firstName: "",
    lastName: "",
    password: "",
    appliedJobs: [{
      appliedDate: "",
      coverLetter: ""
    }]
  }
}
