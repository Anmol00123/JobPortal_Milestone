import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JobserviceService } from './jobservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jobportal1';

  constructor(public loginService: JobserviceService) { }

}
