import { Component } from '@angular/core';
import { Nav } from '../components/nav/nav';
import { Introduction } from '../components/introduction/introduction';
import { Projects } from '../components/projects/projects';
import { Skills } from '../components/skills/skills';

@Component({
  selector: 'app-home',
  imports: [Nav, Introduction, Projects, Skills],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
