import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  activeLink: string = '';
  menuOpen: boolean = false;

  setActiveLink(link: string): void {
    this.activeLink = link;
    setTimeout(() => {
      this.menuOpen =false;
    }, 1000);
  }

  toggleMenu() { this.menuOpen = !this.menuOpen; }
}
