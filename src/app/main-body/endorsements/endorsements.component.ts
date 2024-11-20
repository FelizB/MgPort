import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-endorsements',
  imports: [CommonModule],
  templateUrl: './endorsements.component.html',
  styleUrl: './endorsements.component.css',
})
export class EndorsementsComponent {
  endorsers = [
    {
      imageLink: 'assets/images/passport.png',
      name: 'Dr Sibiko Kenneth',
      phone: '+254701281697',
      email: '',
      address: 'PO BOX 3275-4010012',
      information: 'Head of department Maseno University',
      comment: '',
    },
    {
      imageLink: 'assets/images/passport.png',
      name: 'Sir Benard Makuri',
      phone: '+254737090077',
      email: '',
      address: 'PO BOX 1510-20100',
      information: 'Branch Manager NSSF, Nakuru',
      comment: '',
    },
    {
      imageLink: 'assets/images/passport1.png',
      name: 'Elizabeth Ochieng',
      phone: '+254723786459',
      email: 'elizabeth.ochieng@equitybank.co.ke',
      address: 'PO BOX 41895 - 00100',
      information:
        'Business Growth and Development Manager, Equity Kilimani Branch',
      comment: '',
    },
  ];
}
