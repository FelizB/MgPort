import { Component, OnInit, HostListener, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './main-body/home/home.component';
import { AboutComponent } from './main-body/about/about.component';
import { ServicesComponent } from './main-body/services/services.component';
import { PortfolioComponent } from './main-body/portfolio/portfolio.component';
import { ResumeComponent } from './main-body/resume/resume.component';
import { ContactsComponent } from './main-body/contacts/contacts.component';
import { EndorsementsComponent } from './main-body/endorsements/endorsements.component';
import { HeaderComponent } from './header/header/header.component';
import { FooterComponent } from './footer/footer/footer.component';
import ScrollReveal from 'scrollreveal';
@Component({
  selector: 'app-root',
  imports: [
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    PortfolioComponent,
    ResumeComponent,
    ContactsComponent,
    EndorsementsComponent,
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'MgPort';

  ngOnInit(): void {
    // Initialize ScrollReveal
    const sr = ScrollReveal({
      // reset: true, // Uncomment if you want repeated animations on scroll
      distance: '80px',
      duration: 2000,
      delay: 200,
    });

    // Reveal elements with specific settings
    sr.reveal('.home-content, .heading', { origin: 'top' });
    sr.reveal(
      '.home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .contact form',
      { origin: 'bottom' }
    );
    sr.reveal('.home-content h1, .about-img img, .heading2', {
      origin: 'left',
    });
    sr.reveal('.home-content h3, .home-content p, .about-content', {
      origin: 'right',
    });
  }

  sections!: NodeListOf<HTMLElement>;
  navLinks!: NodeListOf<HTMLAnchorElement>;

  ngAfterViewInit(): void {
    // Get all sections and nav links
    this.sections = document.querySelectorAll('section');
    this.navLinks = document.querySelectorAll('header nav a');
  }

  // Listen to the scroll event
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollPosition = window.scrollY;

    this.sections.forEach((section) => {
      const offset = section.offsetTop - 150; // Adjust for header height
      const height = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (
        sectionId &&
        scrollPosition >= offset &&
        scrollPosition < offset + height
      ) {
        this.navLinks.forEach((link) => {
          link.classList.remove('active'); // Remove 'active' class from all links
        });

        // Add 'active' class to the link that corresponds to the section
        const activeLink = document.querySelector(
          `header nav a[href="#${sectionId}"]`
        );
        if (activeLink) {
          activeLink.classList.add('active');
        }
      }
    });
  }
}
