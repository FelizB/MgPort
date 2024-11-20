import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  private cvUrl: string = 'Resume.pdf';
  downloadCV() {
    const link = document.createElement('a');
    link.href = this.cvUrl;
    link.download = 'resume.pdf';
    link.click();
  }
}
