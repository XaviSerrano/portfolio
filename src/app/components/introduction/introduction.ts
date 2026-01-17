import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-introduction',
  imports: [CommonModule],
  templateUrl: './introduction.html',
  styleUrl: './introduction.css',
})
export class Introduction {
  profileImage = 'assets/images/xavi.png';
  chibiImage = 'assets/images/chibi.png';
}
