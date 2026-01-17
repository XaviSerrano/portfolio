import { Component } from '@angular/core';
import { Nav } from '../components/nav/nav';
import { Introduction } from '../components/introduction/introduction';

@Component({
  selector: 'app-home',
  imports: [Nav, Introduction],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
