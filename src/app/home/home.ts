import { Component } from '@angular/core';
import { Nav } from '../components/nav/nav';
import { Introduction } from '../components/introduction/introduction';
import { Projects } from '../components/projects/projects';

@Component({
  selector: 'app-home',
  imports: [Nav, Introduction, Projects],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
