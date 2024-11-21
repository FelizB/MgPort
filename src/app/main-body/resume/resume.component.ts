import {
  Component,
  AfterViewInit,
  ViewChildren,
  QueryList,
  ElementRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resume',
  imports: [CommonModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css',
})
export class ResumeComponent implements AfterViewInit {
  @ViewChildren('resumeBtn') resumeBtns!: QueryList<ElementRef> | undefined;
  activeSection: string = 'experience';

  ngAfterViewInit() {
    // Ensure all resume buttons are available after view initialization
    setTimeout(() => {
      if (this.resumeBtns) {
        this.resumeBtns.toArray().forEach((btn, idx) => {
          btn.nativeElement.addEventListener('click', () => {
            // Deactivate all buttons
            this.resumeBtns?.toArray().forEach((button) => {
              button.nativeElement.classList.remove('active');
            });

            // Activate the clicked button
            btn.nativeElement.classList.add('active');

            // Set active section based on the clicked button index
            switch (idx) {
              case 0:
                this.activeSection = 'certification';
                break;
              case 1:
                this.activeSection = 'education';
                break;
              case 2:
                this.activeSection = 'certification';
                break;
              case 3:
                this.activeSection = 'skills';
                break;
              case 4:
                this.activeSection = 'personal';
                break;
            }
          });
        });
      }
    }, 0);
  }

  experience = [
    {
      year: 'Jan 2023 - Current',
      title: 'Intern- Finance and Accounts ',
      company: 'Office of the controller of budget',
      information: [
        'Preparing invoices for suppliers',
        'Preparing bank and account reconciliations',
        'Exchequer requisitions',
        'Making payments to suppliers through the system',
        'Payment of employees’ statutory deductions on time.',
      ],
    },

    {
      year: 'Nov 2022 - Nov 2023',
      title: 'Direct sales executive ',
      company: 'I&M Bank Ltd Kenya, Kenyatta Avenue branch ',
      information: [
        'Responsible for clients consulting on loan products, credit cards, banc assurance and other products.',
        'Appraisal of customers credit worthiness.',
        'Relationship management with existing clients.',
      ],
    },
    {
      year: 'Sept 2021 – Sept 2022',
      title: 'Payments officer',
      company: 'Equity Bank, Kenya, Kilimani Branch ',
      information: [
        'Responsible for marketing payment products, attending to merchants and coordinating the sales team.',
        'Assisted customer service experience desk',
        'Plan events related to trainings, team building, farewells',
      ],
    },
    {
      year: 'May 2019 - August',
      title: 'Finance Assistant (Intern) ',
      company: 'National Social Security Fund (NSSF) ',
      information: [
        'Responsible for opening new account for members of the public',
        'Served as a customer service officer assisting on customer queries internally and externally.',
        'Processing payments for the elderly.',
      ],
    },
    {
      year: 'Feb 2015 – August',
      title: 'Store and Records Clerk',
      company: 'Buildmore Construction Company',
      information: [
        'Storing and managing hard copy and digital records of the company and updating records in the system.',
        'Creating Statistics for presentation and reporting purposes',
      ],
    },
  ];
  certification = [
    {
      title: 'Certified Public accountant CPA',
      institution: 'KASNEB',
      dateOfIssue: 'June 2024',
      credential: '',
      CertificateLimk: '',
    },
  ];
  education = [
    {
      year: 'Jan 2020 – Dec 2023',
      title: 'CPA F Finalist',
      institution: 'Summit Institute of Professionals',
      information:
        'Company law and financial management, Auditing and management accounting, Public Finance and Taxation',
    },
    {
      year: 'Aug 2015 – April 2019',
      title: 'Bachelor of Science in Agri-business with IT',
      institution: 'Maseno University',
      information: 'Awarded Second class Upper Division',
    },
    {
      year: 'Feb 2015 - June',
      title: 'Certificate in Computer Packages ',
      institution: ' Kenya Institute of Management',
      information:
        'Internet and Email,Microsoft office and typing,Visual Basic and computer maintenance, Sage Accounting   ',
    },
    {
      year: 'Feb 2011 – Nov 2014',
      title: 'Kenya Certificate of Secondary Education (KCSE)',
      institution: 'Gatero Girls High School',
      information: 'Attained a B+ of 68 points',
    },
    {
      year: 'Jan 2001 – Dec 2010',
      title: 'Kenya Certificate of Primary Education (KCPE)',
      institution: 'Adaned Shining Stars Academy',
      information: 'Attained a B+ of 368, I occupied the head girl position',
    },
  ];

  Skills = [
    {
      icon: '',
      skillName: 'Information Technology',
      information:
        'Expertise in software testing automation tools (RobotFramework, Selenium WebDriver)',
    },
    {
      icon: '',
      skillName: 'Sales and Marketing skills',
      information: 'Agile, DevOps, CI/CD, Robot Framework',
    },
    {
      icon: '',
      skillName: 'Excellent Verbal and written Communication Skills',
      information:
        'Strong foundation and intermittent in software development principles and practices',
    },
    {
      icon: '',
      skillName:
        'Good Accountancy Skills using in sage, pastel and quick books',
      information:
        'Good Accountancy Skills using in sage, pastel and quick books',
    },
    {
      icon: '',
      skillName: 'Professional skills',
      information: 'Professional skills',
    },
    {
      icon: '',
      skillName: 'Good Computing and digital Skills',
      information: 'Good Computing and digital Skills',
    },
    {
      icon: '',
      skillName: 'Good leadership skills',
      information: 'Good leadership skills',
    },
  ];

  age = () => {
    return new Date().getFullYear() - 1997;
  };
  personalInformation = [
    { name: 'Name', item: 'Margaret Wanjiru Njoroge' },
    { name: '', item: '' },
    { name: 'Nationality', item: 'Kenyan' },
    { name: 'Availability', item: 'Full Time' },
    { name: 'Phone', item: '254719158618' },
    { name: 'Language', item: 'English, Swahili' },
    { name: 'Gender', item: 'Female' },
    { name: 'City', item: 'Nairobi, Kenya' },
    { name: 'Experience', item: '4+ Years of Work Experience' },
    { name: 'Freelance', item: 'Available' },
    { name: 'Email', item: 'wanjirunjoroge190@gmail.com' },
  ];
}
