import { Component, OnInit } from '@angular/core';
import { SkillService } from 'src/app/skill.service';
import { Router } from '@angular/router';
import { Skill } from 'src/app/jobservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-delete-skill',
  templateUrl: './delete-skill.component.html',
  styleUrls: ['./delete-skill.component.css']
})
export class DeleteSkillComponent implements OnInit {
  message: string = "";
  constructor(private skillService: SkillService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }
  skill: any = {
    id: "",
    name: "",
    description: ""
  }
  onSubmit() {
    console.log("delete")
    this.skillService.deleteSkill(this.skill.skillId).subscribe(
      (data => { alert(data); })
    )
  }


}
