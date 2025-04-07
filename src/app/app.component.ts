import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AnimationComponent } from './portfolioComponent/animation/animation.component';
import { NavbarComponent } from './portfolioComponent/navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AnimationComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Portfolio';
}
