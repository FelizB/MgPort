import { Component } from '@angular/core';
import emailjs from 'emailjs-com';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-contacts',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css',
})
export class ContactsComponent {
  contactForm: FormGroup;
  successMessage: string | null = null;
  loading: boolean = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobileNumber: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      emailSubject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }
  onSubmit() {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;
      console.log('Form Data:', formData);
      this.loading = true;
      // Simulating an email send (replace with your email logic)
      emailjs
        .send('crazy', 'template_hlluscu', formData, '7v1llwqIeGS1C5ChU')
        .then(
          (response) => {
            this.successMessage = 'Your message has been sent successfully!';
            this.contactForm.reset();
            this.loading = false;

            // Clear success message after 3 seconds
            setTimeout(() => {
              this.successMessage = null;
            }, 5000);
          },
          (error) => {
            console.error('Error sending email:', error);
            this.loading = false;
          }
        );
    }
  }
  // Simulate email sending
  sendEmail(formData: any): Promise<void> {
    return new Promise((resolve) => {
      console.log('Sending email with the following data:', formData);
      setTimeout(resolve, 1000); // Simulate a delay
    });
  }

  contactInformation = [
    { contact: '+254719158618', icon: 'bx bxs-phone', item: 'Phone' },
    {
      contact: 'wanjirunjoroge190@gmail.com',
      icon: 'bx bxs-envelope',
      item: 'Email',
    },
    { contact: 'Nairobi, Kenya', icon: 'bx bxs-map', item: 'Address' },
  ];
}
