import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BookmarkedJob } from './jobservice.service';

@Injectable({
  providedIn: 'root'
})
export class BookmarkedJobService {
  private baseUrl = "http://localhost:8081/bookmark";

  constructor(private http: HttpClient) { }

  //POST Method
  public saveBookmark(bJob: BookmarkedJob) {
    console.log("Bookmark a job method");
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(`${this.baseUrl}/add`, bJob, { headers, responseType: 'text' as 'json' });
  }
  //Delete Method
  public removeBookmark(id: number) {
    console.log("Delete a Bookmarked Job");
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.delete(`${this.baseUrl}/delete/${id}`, { headers, responseType: 'text' as 'json' });
  }
  //GET Method
  public getById(id: number) {
    console.log("Get Bookmarked Job By Id method");
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}/get/id/${id}`, { headers, responseType: 'json' });
  }
  //GET Method
  public getBySkill(skillName: string) {
    console.log("Get Bookmarked Jobs by Skill Name method");
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}/get/skill/${skillName}`, { headers, responseType: 'json' });
  }
}
