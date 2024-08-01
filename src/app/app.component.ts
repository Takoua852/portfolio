import { Component, HostListener, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import AOS from "aos";
import 'aos/dist/aos.css';
import { HeaderComponent } from "./shared/components/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CommonModule,
    RouterLink, RouterModule, HeaderComponent,
    MainContentComponent,
    ImpressumComponent,
    PrivacyPolicyComponent,
    FooterComponent, HeaderComponent]
})

export class AppComponent implements OnInit {
  title = 'Portfolio';

  constructor(private responsive: BreakpointObserver) { }

  isPhoneLandscape = false;

  ngOnInit() {
    this.responsive.observe(Breakpoints.HandsetLandscape)
      .subscribe(result => {
          this.isPhoneLandscape = result.matches;
      });

    AOS.init({
      duration: 700,
      once: false, // Animation bei jedem Scrollen ausführen
      mirror: true // Animation beim Scrollen zurück ausführen
    });
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    AOS.refresh(); // Aktualisiere AOS beim Scrollen
  }
}

