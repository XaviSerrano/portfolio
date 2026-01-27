import { Component } from '@angular/core';
import { Nav } from '../components/nav/nav';
import { Introduction } from '../components/introduction/introduction';
import { Projects } from '../components/projects/projects';
import { Skills } from '../components/skills/skills';
import { Studies } from '../components/studies/studies';
import { About } from '../components/about/about';
import { Footer } from '../components/footer/footer';

@Component({
  selector: 'app-home',
  imports: [Nav, Introduction, Projects, Skills, Studies, About, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
