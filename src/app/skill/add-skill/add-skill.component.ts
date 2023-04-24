import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SkillService } from 'src/app/skill.service';
import { Skill } from 'src/app/jobservice.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.css']
})
export class AddSkillComponent implements OnInit {
  message: string = "";
  constructor(private skillService: SkillService, private router: Router) { }

  ngOnInit(): void {
  }
  skill: any = {
    id: "",
    name: "",
    description: ""
  }
  onSubmit() {
    console.log(this.skill);
    this.skillService.saveSkill(this.skill)
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
  goBack() {
    this.router.navigate(['../../skill']);
  }
}