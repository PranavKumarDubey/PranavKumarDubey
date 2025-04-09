import { Component, ElementRef, ViewChild  } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  
  @ViewChild('navCollapse') navCollapse!: ElementRef;

  closeNavbar() {
    const navbarEl = this.navCollapse.nativeElement;
    if (navbarEl.classList.contains('show')) {
      navbarEl.classList.remove('show');
    } 
  }

}
