import { Component } from '@angular/core';
import { RevealDirective } from '../../shared/reveal';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [RevealDirective, TranslateModule],
  templateUrl: './skills.html',
  styleUrls: ['./skills.css'],
})
export class Skills {}
