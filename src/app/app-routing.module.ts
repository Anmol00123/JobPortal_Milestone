import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AddbookmarkComponent } from './bookmarked-freelancer/addbookmark/addbookmark.component';
import { BookmarkedFreelancerComponent } from './bookmarked-freelancer/bookmarked-freelancer.component';
import { FindbyskillComponent } from './bookmarked-freelancer/findbyskill/findbyskill.component';
import { RemovebookmarkComponent } from './bookmarked-freelancer/removebookmark/removebookmark.component';
import { BookmarkedJobComponent } from './bookmarked-job/bookmarked-job.component';
import { FindByIdComponent } from './bookmarked-job/find-by-id/find-by-id.component';
import { RemoveBookmarkComponent } from './bookmarked-job/remove-bookmark/remove-bookmark.component';
import { SaveBookmarkComponent } from './bookmarked-job/save-bookmark/save-bookmark.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { GetFeedbackComponent } from './feedback/get-feedback/get-feedback.component';
import { SaveFeedbackComponent } from './feedback/save-feedback/save-feedback.component';
import { UpdateFeedbackComponent } from './feedback/update-feedback/update-feedback.component';
import { FindfreelancerComponent } from './freelancer/findfreelancer/findfreelancer.component';
import { FreelancerComponent } from './freelancer/freelancer.component';
import { SavefreelancerComponent } from './freelancer/savefreelancer/savefreelancer.component';
import { UpdatefreelancerComponent } from './freelancer/updatefreelancer/updatefreelancer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AddjobComponent } from './job/addjob/addjob.component';
import { DeleteJobComponent } from './job/delete-job/delete-job.component';
import { GetbyidComponent } from './job/getbyid/getbyid.component';
import { JobComponent } from './job/job.component';
import { ListjobsComponent } from './job/listjobs/listjobs.component';
import { UpdateJobComponent } from './job/update-job/update-job.component';
import { AddJobapplicationComponent } from './jobapplication/add-jobapplication/add-jobapplication.component';
import { FindbyidJobapplicationComponent } from './jobapplication/findbyid-jobapplication/findbyid-jobapplication.component';
import { JobapplicationComponent } from './jobapplication/jobapplication.component';
import { UpdateJobapplicationComponent } from './jobapplication/update-jobapplication/update-jobapplication.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AddRecruiterComponent } from './recruiter/add-recruiter/add-recruiter.component';
import { DltRecruiterComponent } from './recruiter/dlt-recruiter/dlt-recruiter.component';
import { FindbyidRecruiterComponent } from './recruiter/findbyid-recruiter/findbyid-recruiter.component';
import { RecruiterComponent } from './recruiter/recruiter.component';
import { UpdateRecruiterComponent } from './recruiter/update-recruiter/update-recruiter.component';
import { RegisterComponent } from './register/register.component';
import { AddSkillComponent } from './skill/add-skill/add-skill.component';
import { DeleteSkillComponent } from './skill/delete-skill/delete-skill.component';
import { ListAllSkillsComponent } from './skill/list-skill/list-skill.component';
import { SkillComponent } from './skill/skill.component';
import { updateSkillComponent } from './skill/update-skill/update-skill.component';
import { AddExperienceComponent } from './skillexperience/add-experience/add-experience.component';
import { SkillexperienceComponent } from './skillexperience/skillexperience.component';
import { UpdateExperienceComponent } from './skillexperience/update-experience/update-experience.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'homepage', component: HomepageComponent },
  {
    path: 'jobfunc', component: JobComponent, children: [
      { path: 'addjob', component: AddjobComponent },
      { path: 'updatejob', component: UpdateJobComponent },
      { path: 'deletejob', component: DeleteJobComponent },
      { path: 'listjob', component: ListjobsComponent },
      { path: 'getjob', component: GetbyidComponent },
    ]
  },
  {
    path: 'bookmark', component: BookmarkedFreelancerComponent, children: [
      { path: 'addBookmark', component: AddbookmarkComponent },
      { path: 'getBookmark', component: FindbyskillComponent },
      { path: 'deleteBookmark', component: RemoveBookmarkComponent }
    ]
  },
  {
    path: 'recruiter', component: RecruiterComponent, children: [
      { path: 'AddRecruiter', component: AddRecruiterComponent },
      { path: 'DltRecruiter', component: DltRecruiterComponent },
      { path: 'UpdateRecruiter', component: UpdateRecruiterComponent },
      { path: 'FindRecruiter', component: FindbyidRecruiterComponent },
      {
        path: 'Feedback', component: FeedbackComponent, children: [
          { path: 'savefeed', component: SaveFeedbackComponent },
          { path: 'updateFeed', component: UpdateFeedbackComponent },
          { path: 'getfeed', component: GetFeedbackComponent },
        ]
      },
      {
        path: 'BookmarkedFreelancer', component: BookmarkedFreelancerComponent, children: [
          { path: 'addBookmark', component: AddbookmarkComponent },
          { path: 'getBookmark', component: FindbyskillComponent },
          { path: 'deleteBookmark', component: RemovebookmarkComponent },
        ]
      }]
  },
  {
    path: 'freelancer', component: FreelancerComponent, children: [
      {
        path: 'Bookmarkedjob', component: BookmarkedJobComponent, children: [
          { path: 'save-bookmark', component: SaveBookmarkComponent },
          { path: 'remove-bookmark', component: RemoveBookmarkComponent },
          { path: 'find-by-id', component: FindByIdComponent },
          { path: 'find-by-skill', component: FindbyskillComponent }
        ]
      }, {
        path: 'Skill',
        component: SkillComponent,
        children: [
          { path: 'add-skill', component: AddSkillComponent },
          { path: 'update-skill', component: updateSkillComponent },
          { path: 'delete-skill', component: DeleteSkillComponent },
          { path: 'list-skill', component: ListAllSkillsComponent },
        ],
      },
      {
        path: 'Jobapplication', component: JobapplicationComponent, children: [
          { path: 'AddJobapplication', component: AddJobapplicationComponent },
          { path: 'DltJobapplication', component: DltRecruiterComponent },
          { path: 'UpdateJobapplication', component: UpdateJobapplicationComponent },
          { path: 'FindJobapplication', component: FindbyidJobapplicationComponent },
        ]
      },
      {
        path: 'SkillExperience', component: SkillexperienceComponent, children: [
          { path: 'addexp', component: AddExperienceComponent },
          { path: 'updateexp', component: UpdateExperienceComponent }
        ]
      },
      { path: 'add', component: SavefreelancerComponent },
      { path: 'update', component: UpdatefreelancerComponent },
      { path: 'byid', component: FindfreelancerComponent }
    ]
  },
  { path: 'aboutus', component: AboutUsComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
