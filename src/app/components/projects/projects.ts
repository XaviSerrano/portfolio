import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { RevealDirective } from '../../shared/reveal';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [FontAwesomeModule, RevealDirective],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css'],
})
export class Projects {
  faGithub = faGithub;
  faExternal = faArrowUpRightFromSquare;
}
