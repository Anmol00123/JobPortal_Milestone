import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BookmarkedFreelancer } from './jobservice.service';

@Injectable({
  providedIn: 'root'
})
export class BookmarkedFreelancerService {
  constructor(private http: HttpClient) { }

  headers_object = new HttpHeaders();

  public addBookmark(bookmarkedFreelancer: BookmarkedFreelancer) {
    console.log("Bookmark in service class");
    console.log(bookmarkedFreelancer);
    const headers = new HttpHeaders().set('Content_Type', 'application/json; charset=utf-8');
    return this.http.post("http://localhost:8081/bookmarkfree/add", bookmarkedFreelancer, { responseType: 'text' as 'json', headers });
  }

  public removeBookmark(remBook: BookmarkedFreelancer) {
    console.log("Removing bookmark");
    console.log(remBook);
    const headers = new HttpHeaders().set('Content_Type', 'application/json; charset=utf-8');
    return this.http.delete("http://localhost:8081/bookmarkfree/delete" + remBook, { responseType: 'text' as 'json', headers });
  }

  public findBySkill(skill: string) {
    console.log("Finding by skill");
    console.log(skill);
    const headers = new HttpHeaders().set('Content_Type', 'application/json; charset=utf-8');
    return this.http.get("http://localhost:8081/bookmarkfree/get" + skill, { responseType: 'text' as 'json', headers });
  }

}
