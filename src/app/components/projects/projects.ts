import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { RevealDirective } from '../../shared/reveal';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [FontAwesomeModule, RevealDirective, TranslateModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css'],
})
export class Projects {
  faGithub = faGithub;
  faExternal = faArrowUpRightFromSquare;
}
