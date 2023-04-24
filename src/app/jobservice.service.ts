import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class JobserviceService {
  user!: User;
  role!: string;
  token = null;
  headers_object = new HttpHeaders();
  constructor(private httpService: HttpClient, private router: Router) { }
  updateJobDetails: Job = new Job();

  public addJob(job: Job) {
    console.log("adding job method");
    console.log(job);
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');

    return this.httpService.post("http://localhost:8081/job/postJob", job, { responseType: 'text' as 'json', headers });

  }

  public update(job: Job) {
    console.log("inside update job");
    console.log(job);
    const headers = new HttpHeaders().set('Content_Type', 'application/json; charset=utf-8');
    return this.httpService.put("http://localhost:8081/job/update", job, { responseType: 'text' as 'json', headers });
  }

  public deleteJob(id: number) {
    console.log("checking deletion operation");
    console.log(id);
    return this.httpService.delete("http://localhost:8081/job/delete/" + id);
  }

  public getJobById(id: number) {
    console.log("Getting job by id method");
    console.log(id);
    return this.httpService.get("http://localhost:8081/get/" + id);
  }


  authenticate(username: any, password: any) {
    return this.httpService
      .post<any>("http://localhost:8081/authenticate", { username, password })
      .pipe(
        map(userData => {
          console.log(userData.token)
          sessionStorage.setItem("username", username);
          let tokenStr = "Bearer " + userData.token;
          sessionStorage.setItem("token", tokenStr);
          console.log("token", sessionStorage.getItem("token"))
          return userData;
        })
      );
  }


  register(username: any, password: any, role: any) {
    alert("Registering as " + role)
    return this.httpService
      .post<any>("http://localhost:8081/register", { username, password, role })
      .pipe(
        map((userData: any) => {
          return userData;
        })
      );
  }
  //roles applicant,ustaffadmin,admcommitemember
  isUserLoggedIn() {
    let user = sessionStorage.getItem("username");
    console.log(user);
    console.log(!(user === null));
    return !(user === null);
  }
  isAdmin() {
    let role = sessionStorage.getItem("role");
    console.log("ROLE  ..." + role);
    return !(role === "admin")
  }
  logOut() {
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("role");
    sessionStorage.clear();
    this.router.navigate(['/login'])
  }
}
export class User {
  username!: string;
  password!: string;
  role!: string;

} export class JobApplication {

  jobApplicationId!: number;
  job!: Job;
  appliedDate!: Date;
  coverLetter!: string;

} export class Skill {

  id: number
  skillId!: number;
  name!: string;
  description!: string;

} export class Recruiter {
  recruiterId!: number;
  firstName!: string;
  lastName!: string;
  postedJobs!: Job[];
  feedbacks!: Feedback[];
  freelancers!: BookmarkedFreelancer[];

} export class BookmarkedFreelancer {
  bookMarkedFreeid!: number;
  skill!: Skill;
  freelancer!: Freelancer;
  bookmarkedBy!: Recruiter;

}
export class Feedback {
  feedbackId!: number;
  rating!: number;
  comment!: string;
  createdBy!: Recruiter;
  createdFor!: Freelancer;

} export class Freelancer {
  freelancerId!: number;
  firstName!: string;
  lastName!: string;
  password!: string;
  appliedJobs!: JobApplication[];
  feedbacks!: Feedback;
  skills!: SkillExperience;
  bookmarkedJobs!: BookmarkedJob[];
}

export class SkillExperience {
  skillExperienceid!: number;
  years!: number;
  freelancer!: Freelancer;
  skill!: Skill;

}
export class BookmarkedJob {
  bookmarkedjobId!: number;
  skill!: Skill;
  job!: Job;
  freelancer!: Freelancer;

}
export class Job {

  jobId!: number;
  skill!: Skill;
  postedBy!: Recruiter;
  postedDate!: Date;
  awardedTo!: Freelancer;
  active!: Boolean;
  jobApplications!: JobApplication;
}