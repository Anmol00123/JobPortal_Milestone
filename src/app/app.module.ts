import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicAuthHtppInterceptorService } from './BasicAuthHttpInterceptorService';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { JobComponent } from './job/job.component';
import { FreelancerComponent } from './freelancer/freelancer.component';
import { SavefreelancerComponent } from './freelancer/savefreelancer/savefreelancer.component';
import { FindfreelancerComponent } from './freelancer/findfreelancer/findfreelancer.component';
import { UpdatefreelancerComponent } from './freelancer/updatefreelancer/updatefreelancer.component';
import { RemoveBookmarkComponent } from './bookmarked-job/remove-bookmark/remove-bookmark.component';
import { DeleteJobComponent } from './job/delete-job/delete-job.component';
import { GetbyidComponent } from './job/getbyid/getbyid.component';
import { BookmarkedFreelancerComponent } from './bookmarked-freelancer/bookmarked-freelancer.component';
import { SkillComponent } from './skill/skill.component';
import { updateSkillComponent } from './skill/update-skill/update-skill.component';
import { ListAllSkillsComponent } from './skill/list-skill/list-skill.component';
import { AddbookmarkComponent } from './bookmarked-freelancer/addbookmark/addbookmark.component';
import { AddSkillComponent } from './skill/add-skill/add-skill.component';
import { DeleteSkillComponent } from './skill/delete-skill/delete-skill.component';
import { UpdateRecruiterComponent } from './recruiter/update-recruiter/update-recruiter.component';
import { FindbyidRecruiterComponent } from './recruiter/findbyid-recruiter/findbyid-recruiter.component';
import { AddRecruiterComponent } from './recruiter/add-recruiter/add-recruiter.component';
import { DltRecruiterComponent } from './recruiter/dlt-recruiter/dlt-recruiter.component';
import { AddJobapplicationComponent } from './jobapplication/add-jobapplication/add-jobapplication.component';
import { AddjobComponent } from './job/addjob/addjob.component';
import { UpdateJobComponent } from './job/update-job/update-job.component';
import { RecruiterComponent } from './recruiter/recruiter.component';
import { BookmarkedJobComponent } from './bookmarked-job/bookmarked-job.component';
import { JobapplicationComponent } from './jobapplication/jobapplication.component';
import { SaveBookmarkComponent } from './bookmarked-job/save-bookmark/save-bookmark.component';
import { FindByIdComponent } from './bookmarked-job/find-by-id/find-by-id.component';
import { AddExperienceComponent } from './skillexperience/add-experience/add-experience.component';
import { UpdateExperienceComponent } from './skillexperience/update-experience/update-experience.component';
import { SaveFeedbackComponent } from './feedback/save-feedback/save-feedback.component';
import { UpdateFeedbackComponent } from './feedback/update-feedback/update-feedback.component';
import { GetFeedbackComponent } from './feedback/get-feedback/get-feedback.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { UpdateJobapplicationComponent } from './jobapplication/update-jobapplication/update-jobapplication.component';
import { FindbyidJobapplicationComponent } from './jobapplication/findbyid-jobapplication/findbyid-jobapplication.component';
import { SkillexperienceComponent } from './skillexperience/skillexperience.component';
import { FindbyskillComponent } from './bookmarked-freelancer/findbyskill/findbyskill.component';
import { RemovebookmarkComponent } from './bookmarked-freelancer/removebookmark/removebookmark.component';
import { ListjobsComponent } from './job/listjobs/listjobs.component';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent, LoginComponent, LogoutComponent, RegisterComponent, JobComponent, AddjobComponent, UpdateJobComponent, DeleteJobComponent, GetbyidComponent, FreelancerComponent, SavefreelancerComponent, FindfreelancerComponent, UpdatefreelancerComponent, RemoveBookmarkComponent, DeleteJobComponent, FindfreelancerComponent, GetbyidComponent, BookmarkedFreelancerComponent, SkillComponent, updateSkillComponent, AddbookmarkComponent, ListAllSkillsComponent, AddSkillComponent, DeleteSkillComponent, updateSkillComponent, UpdateRecruiterComponent, FindbyidRecruiterComponent, AddRecruiterComponent, DltRecruiterComponent, AddJobapplicationComponent, DltRecruiterComponent, RecruiterComponent, BookmarkedJobComponent, JobapplicationComponent, SaveBookmarkComponent, RemoveBookmarkComponent, FindByIdComponent, AddSkillComponent, AddExperienceComponent, UpdateExperienceComponent, updateSkillComponent, UpdateFeedbackComponent, SaveFeedbackComponent, FeedbackComponent, GetFeedbackComponent,  UpdateJobapplicationComponent, AddJobapplicationComponent, FindbyidJobapplicationComponent, SkillexperienceComponent, FindbyskillComponent, RemovebookmarkComponent, ListjobsComponent, HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, FormsModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: BasicAuthHtppInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
