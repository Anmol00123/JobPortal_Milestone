import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Job, User } from './jobservice.service';

@Injectable({
  providedIn: 'root'
})
export class ListjobsService {

  updatejob: Job;
  user: User;
  headers_object = new HttpHeaders();
  constructor(private http: HttpClient) { }

  public getAllJobs() {
    return this.http.get<Job>("http://localhost:8081/job/getall");
  }

  public updation(updatejob: Job) {
    this.updatejob = updatejob;
  }

  public updateMethod() {
    return this.updatejob;
  }
  public update(job: Job) {
    console.log("inside update job");
    console.log(job);
    const headers = new HttpHeaders().set('Content_Type', 'application/json; charset=utf-8');
    return this.http.put("http://localhost:8081/job/update", job, { responseType: 'text' as 'json', headers });
  }

  public deleteJob(id: number) {
    console.log("checking deletion operation");
    console.log(id);
    return this.http.delete("http://localhost:8081/job/delete/" + id);
  }

}
