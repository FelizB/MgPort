import { AfterViewInit, Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent implements AfterViewInit {
  constructor(private cdRef: ChangeDetectorRef) {}

  @ViewChild('projectSection') projectSection!: ElementRef<HTMLElement>;
  @ViewChild('projectImage') projectImage!: ElementRef<HTMLImageElement>;
  @ViewChild('projectSkills') projectSkills!: ElementRef<HTMLElement>;
  @ViewChild('projectDescription') projectDescription!: ElementRef<HTMLElement>;
  @ViewChild('arrowLeft') arrowLeft!: ElementRef<HTMLButtonElement>;
  @ViewChild('arrowRight') arrowRight!: ElementRef<HTMLButtonElement>;

  projects = [
    {
      status: 'active',
      ids: '01',
      section: 'Accountancy',
      description:
        'I handle various financial tasks including preparing invoices for suppliers, reconciling bank and account statements, processing Exchequer requisitions, making supplier payments through the system, and ensuring timely payment of employees statutory deductions. ',
      skills: 'Team player',
      githubLink: '',
      liveLink: '',
      imageLink: 'assets/images/accounting.jpeg',
    },
    {
      status: '',
      ids: '02',
      section: 'Sales Executive',
      description:
        "I am responsible for consulting clients on loan products, credit cards, bancassurance, and other financial services. I assess customers' creditworthiness and manage relationships with existing clients to ensure satisfaction and continued business.",
      skills: 'Team player',
      githubLink: '',
      liveLink: '',
      imageLink: 'assets/images/sales.jpeg',
    },
    {
      status: '',
      ids: '03',
      section: 'Banking - Operations Support',
      description:
        'I am responsible for marketing payment products, assisting merchants, and coordinating the sales team. Additionally, I support the customer service experience desk and help plan events such as training sessions, team-building activities, and farewells.',
      skills: 'Team player',
      githubLink: '',
      liveLink: '',
      imageLink: 'assets/images/finance.jpeg',
    },
    {
      status: '',
      ids: '04',
      section: 'Financial assistance',
      description:
        'I am responsible for opening new accounts for the public, serving as a customer service officer to address internal and external queries, and processing payments for elderly clients.',
      skills: 'Team Player',
      githubLink: '',
      liveLink: '',
      imageLink: 'assets/images/accounts.jpeg',
    },
  ];
  updateProjects() {
    this.projects = [...this.projects];
    this.cdRef.detectChanges();
    console.log(this.projects);
  }

  index = 0;

  ngAfterViewInit() {
    this.updateProjectUI();
  }

  updateProjectUI() {
    const currentProject = this.projects[this.index];

    // Update project details
    this.projectSection.nativeElement.textContent = currentProject.section;
    this.projectImage.nativeElement.src = currentProject.imageLink;
    this.projectSkills.nativeElement.textContent = currentProject.skills;
    this.projectDescription.nativeElement.textContent =
      currentProject.description;

    // Update arrow button states
    if (this.index === 0) {
      // Disable left arrow and add disabled class
      this.arrowLeft.nativeElement.disabled = true;
      this.arrowLeft.nativeElement.classList.add('disabled');
    } else {
      // Enable left arrow and remove disabled class
      this.arrowLeft.nativeElement.disabled = false;
      this.arrowLeft.nativeElement.classList.remove('disabled');
    }

    if (this.index === this.projects.length - 1) {
      // Disable right arrow and add disabled class
      this.arrowRight.nativeElement.disabled = true;
      this.arrowRight.nativeElement.classList.add('disabled');
    } else {
      // Enable right arrow and remove disabled class
      this.arrowRight.nativeElement.disabled = false;
      this.arrowRight.nativeElement.classList.remove('disabled');
    }
  }

  navigateRight() {
    if (this.index < this.projects.length - 1) {
      this.index++;
      this.updateProjectUI();
    }
  }

  navigateLeft() {
    if (this.index > 0) {
      this.index--;
      this.updateProjectUI();
    }
  }
}
