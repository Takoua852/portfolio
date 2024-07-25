import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// import  AOS from 'aos';
// import 'aos/dist/aos.css';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
  

  // AOS.init({
  //   duration: 1200, // Dauer der Animation in Millisekunden
  //   offset: 200, // Offset, nach dem die Animation startet
  //   easing: 'ease-in-out', // Beschleunigungskurve der Animation
  //   delay: 100, // Verzögerung vor dem Start der Animation
  //   once: true, // Animation nur einmal abspielen
  //   mirror: false // Animation bei jedem Scrollen wiederholen
  // });