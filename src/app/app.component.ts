import { Component } from '@angular/core';
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
export class AppComponent {}
