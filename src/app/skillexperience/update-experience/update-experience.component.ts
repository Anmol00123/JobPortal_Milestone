import { Component, OnInit } from '@angular/core';
import { SkillexperienceService } from 'src/app/skillexperience.service';


@Component({
  selector: 'app-update-experience',
  templateUrl: './update-experience.component.html',
  styleUrls: ['./update-experience.component.css']
})
export class UpdateExperienceComponent implements OnInit {
  message: string = ""

  constructor(private skillExperienceService: SkillexperienceService) { }

  ngOnInit(): void {
  }
  skillexperience: any = {
    years: "",
    skill:
    {
      name: "",
      description: ""
    },
    freelancer: {
      id: "",
      firstname: "",
      lastname: "",
      password: ""
    }
  }
  onSubmit() {
    console.log(this.skillexperience);
    this.skillExperienceService.SkillExperienceService.updateSkillExp(this.skillexperience.id, this.skillexperience.freelancerId, this.skillexperience.years)
      .subscribe(
        data => {
          console.log(data);
          alert(data);
        },
        err => {
          alert(err.error);
        }
      );

  }
}
