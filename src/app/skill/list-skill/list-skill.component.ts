import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { SkillService } from 'src/app/skill.service';
import { Skill } from 'src/app/jobservice.service';
import { NgForm } from '@angular/forms';
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-list-skills',
  templateUrl: './list-skill.component.html',
  styleUrls: ['./list-skill.component.css']
})
export class ListAllSkillsComponent implements OnInit {
  message: string = "";

  constructor(private skillService: SkillService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }
  skill: any = {
    name: "",
    description: ""
  }
  onSubmit() {
    console.log("list of skills")
    this.skillService.getAllSkills().subscribe(
      data => {
        this.skill = data;
      },
      err => {
        alert(err.error)
      }
    )
  }
}
