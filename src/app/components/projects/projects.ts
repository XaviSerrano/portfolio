import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-projects',
  imports: [FontAwesomeModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  faGithub = faGithub;
  faExternal = faArrowUpRightFromSquare;
}
