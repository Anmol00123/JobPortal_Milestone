import { Component, OnInit } from '@angular/core';
import { SkillService } from 'src/app/skill.service';

@Component({
  selector: 'app-update-skill',
  templateUrl: './update-skill.component.html',
  styleUrls: ['./update-skill.component.css']
})
export class updateSkillComponent implements OnInit {

  constructor(private skillService: SkillService) { }

  ngOnInit(): void {
  }
  skill: any = {

    name: "",
    description: "",
    id: "",
  }
  onSubmit() {
    console.log("updating")
    this.skillService.updateSkill(this.skill.skillId, this.skill).subscribe(
      (data => { alert(data); })
    )
  }

}
