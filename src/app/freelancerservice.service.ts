import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Freelancer } from './jobservice.service';
@Injectable({
  providedIn: 'root'
})
export class FreelancerService {

 baseUrl = "http://localhost:8081/freelancer";
  
  constructor(private http: HttpClient) {
    
  }

  //POST Method
  public createFreelancer(freelancer: Freelancer) {
    console.log("Add Freelancer Method");
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(`${this.baseUrl}/add`, freelancer, {  responseType: 'text' as 'json',headers });
  }

  //GET Method
  public findById(id: number): Observable<any> {
    console.log("Get Freelancer by Id");
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}/get/${id}`, { headers, responseType: 'json' });
  }
  public updateFreelancer(freelancer: Freelancer) {
    console.log("Update Freelancer Details");
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.put(`${this.baseUrl}/update`, { headers, responseType: 'json' });
  }
}
