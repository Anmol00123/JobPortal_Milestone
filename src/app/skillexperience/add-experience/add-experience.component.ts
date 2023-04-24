import { Component, OnInit } from '@angular/core';
import { SkillexperienceService } from 'src/app/skillexperience.service';


@Component({
  selector: 'app-add-experience',
  templateUrl: './add-experience.component.html',
  styleUrls: ['./add-experience.component.css']
})
export class AddExperienceComponent implements OnInit {
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
    this.skillExperienceService.addExperience(this.skillexperience)
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
