import { Component } from '@angular/core';
import { RevealDirective } from '../../shared/reveal';
@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './skills.html',
  styleUrls: ['./skills.css'],
})
export class Skills {}
