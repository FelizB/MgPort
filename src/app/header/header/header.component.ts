import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  menuItems = [
    { id: '#home', status: '', title: 'Home' },
    { id: '#about', status: '', title: 'About' },
    { id: '#services', status: '', title: 'Services' },
    { id: '#resume', status: '', title: 'Resume' },
    { id: '#portfolio', status: '', title: 'Portfolio' },
    { id: '#endorsements', status: '', title: 'Endorsements' },
    { id: '#contact', status: '', title: 'Contacts' },
  ];
}
