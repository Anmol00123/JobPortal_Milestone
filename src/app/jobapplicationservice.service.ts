import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JobApplication, User } from './jobservice.service';

@Injectable({
  providedIn: 'root'
})
export class JobapplicationserviceService {
  user!:User;
  role!:string;
  token=null;
  headers_object = new HttpHeaders();
  constructor(private httpService:HttpClient) { }

   //POST Method
   public applyToJobApplication(jobapplication:JobApplication) {
    console.log("Apply to Job Method");
    console.log(jobapplication);
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    
   return this.httpService.post("http://localhost:8081/JobApplicationController/SaveJobApplication",jobapplication,{ responseType:'text' as 'json',headers});

   // return this.httpService.post("http://localhost:1111/JobApplicationController/SaveJobApplication", jobapplication); //,{ headers, responseType:'text' as 'json' });
  }

    //PUT Mapping
  public updateApplication(jobapplication: JobApplication) {
    console.log("Update Job Application");
    console.log(jobapplication);
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.httpService.put("http://localhost:8081/JobApplicationController/UpdateJobApplication",jobapplication,{ headers, responseType:'text' as 'json' });
  }

  
  //DELETE Mapping
  public dltJobApplication(jobId: number) {
    console.log("Delete Job Application");
        const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
       return this.httpService.delete("http://localhost:8081/JobApplicationController/DeleteJobApplication/jobId",{ headers, responseType:'text' as 'json' });
  }

  // //GET Method
  public findByIdJobApplication(jobId: number) :Observable<any>{
    console.log("Find Applications for a Job method");
       const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.httpService.get<JobApplication>("http://localhost:8081/JobApplicationController/GetJobApplicationById/"+jobId,{ headers, responseType:'text' as 'json' });
  }

 

}

