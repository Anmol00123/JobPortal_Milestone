import { Component, OnInit } from '@angular/core';
import { FreelancerService } from 'src/app/freelancerservice.service';

@Component({
  selector: 'app-updatefreelancer',
  templateUrl: './updatefreelancer.component.html',
  styleUrls: ['./updatefreelancer.component.css']
})
export class UpdatefreelancerComponent implements OnInit {

  constructor(private freelancerService: FreelancerService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log("update method")
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
