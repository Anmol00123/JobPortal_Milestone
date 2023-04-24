import { NumberSymbol } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Feedback } from './jobservice.service';


@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  baseUrl = "http://localhost:8081/feedbacks";
  constructor(private http: HttpClient) { }

  //POST Method
  public addFeedback(feedback: Feedback) {
    console.log("Create New Feedback");
    console.log(feedback);

    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(`${this.baseUrl}/saveFeedback`, feedback, { headers, responseType: 'text' as 'json' });
  }
  //POST Method 
  public updateFeedback(feedback: Feedback) {
    console.log("update Feedback");
    console.log(feedback);

    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(`${this.baseUrl}/updateFeedback`, feedback, { headers, responseType: 'text' as 'json' });
  }


  //GET Method
  public getFeedback(id: number) {
    console.log("findById");
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}/getFeedback/` + { id }, { headers, responseType: 'text' as 'json' });
  }

  //GET Method
  public getAverageRatings(id: string) {
    console.log("Get Average Ratings for Freelancer");
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}/get/averageRatings/` + { id }, { headers, responseType: 'text' as 'json' });
  }

}
