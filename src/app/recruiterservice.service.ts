import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recruiter } from './jobservice.service';

@Injectable({
  providedIn: 'root'
})
export class RecruiterserviceService {

  constructor(private httpService:HttpClient) { }


  //POST Method
  public addRecruiter(recruiter: Recruiter){
    console.log("Create new Recruiter");
    console.log(recruiter);
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.httpService.post("http://localhost:8081/recruiterController/SaveRecruiter", recruiter, {  responseType: 'text' as 'json',headers });
  }

   //PUT Method
   public updateRecruiter(recruiter: Recruiter){
    console.log("Update Recruiter");
    console.log(recruiter);
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.httpService.put("http://localhost:8081/recruiterController/UpdateRecruiter", recruiter, {  responseType: 'text' as 'json',headers });
  }

  //DELETE Mapping
  public dltRecruiter(Id: number){
    console.log("Delete Recruiter");
        const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
       return this.httpService.delete("http://localhost:8081/recruiterController/DeleteRecruiter",{ headers, responseType:'text' as 'json' });
  }
 // //GET Method
 public findByIdRecruiter(Id: number) {
  console.log("Find Recruiter by given Id");
     const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
  return this.httpService.get("http://localhost:8081/recruiterController/GetRecruiter/Id",{ headers, responseType:'text' as 'json' });
}

}
