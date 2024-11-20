import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent {
  services = [
    {
      icon: 'bx bx-money-withdraw',
      externalLink: '',
      title: 'Accounting Services',
      information:
        'As an accounting professional, I manage financial records, ensure compliance with regulations, and provide accurate reporting to support decision-making. I specialize in bookkeeping, financial statement preparation, and tax compliance, streamlining processes for efficiency. By leveraging tools and best practices, I help organizations maintain transparency, optimize financial performance, and meet regulatory standards.',
    },
    {
      icon: 'bx bx-wallet',
      externalLink: '',
      title: 'Financial Management Services',
      information:
        'As a financial management professional, I focus on optimizing cash flow, budgeting, and long-term financial planning to support organizational goals. I provide insights through investment analysis, risk management, and cost control strategies, ensuring financial stability and growth. By leveraging data and best practices, I help organizations make informed decisions and maximize value.',
    },

    {
      icon: 'bx bx-loader-circle ',
      externalLink: '',
      title: 'Compliance and Advisory Services',
      information:
        'As a compliance and advisory professional, I ensure adherence to regulations and implement robust governance frameworks. I provide strategic advice on regulatory compliance, risk mitigation, and process improvements to enhance operational efficiency. By staying updated on industry standards, I help organizations navigate complexities and maintain ethical, compliant operations.',
    },
    {
      icon: 'bx bxl-audible',
      externalLink: '',
      title: 'Supplementary Auditing Services',
      information:
        'As a professional in supplementary auditing services, I conduct operational, IT, and performance audits to evaluate efficiency, security, and goal achievement. I focus on identifying risks, optimizing processes, and ensuring systems align with industry standards. By delivering actionable insights, I help organizations improve performance, mitigate risks, and enhance internal controls.',
    },
    {
      icon: 'bx bxl-audible',
      externalLink: '',
      title: 'Core Financial Auditing Services',
      information:
        'As a financial auditor, I provide core auditing services including statutory, internal, and external audits to ensure financial accuracy and regulatory compliance. I assess financial statements, internal controls, and tax records, offering independent assurance to stakeholders. By identifying risks and inefficiencies, I help organizations maintain transparency and enhance financial integrity.',
    },
    {
      icon: 'bx bxs-bank',
      externalLink: '',
      title: 'Banker',
      information:
        'As a banker, I provide a range of financial services including personal and business banking, loans, investment management, and financial planning. I assist clients in managing their finances, offering tailored solutions for savings, credit, and investments. By maintaining strong relationships and staying informed about market trends, I help individuals and businesses achieve their financial goals while ensuring compliance with banking regulations.',
    },
  ];
}
