import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobserviceService, User } from '../jobservice.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private myService:JobserviceService,private router:Router) { }
  user:User=new User();
  invalidLogin = false
  role!: string;
  @Input() error: string ="";
  ngOnInit() {
  }
  login(loginForm:any) {
    this.role=loginForm.role;
    sessionStorage.setItem("role",this.role)
    alert("As :"+this.role);
      (this.myService.authenticate(loginForm.username, loginForm.password).subscribe(
        (data: any) => {
          this.router.navigate(['/homepage'])
          this.invalidLogin = false
        },
        (        error: { message: string; }) => {
          this.invalidLogin = true
          this.error = error.message;
  
        }
      )
      );
  }
}
//Observable,Promise