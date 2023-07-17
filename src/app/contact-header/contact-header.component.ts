import { Component, OnInit } from '@angular/core';
import * as AOS from "aos";
import * as emailjs from "@emailjs/browser"
import { EmailJsServiceService } from '../services/email-js-service.service';
import { EmailTemplate } from '../interfaces/email-template';

@Component({
  selector: 'app-contact-header',
  templateUrl: './contact-header.component.html',
  styleUrls: ['./contact-header.component.scss']
})
export class ContactHeaderComponent implements OnInit {

  emailTextError : any;
  companyTextError : any;
  subjectTextError : any;
  textAreaError : any;

  templateParams !: {
    subject: string,
    company: string,
    detail: string,
    email: string
}

  messageSended: string = ''

  constructor(private emailService: EmailJsServiceService) {}

  //Elenco funzioni per il controllo validazione degli input nel form
  emailCheck(value : any) {

    if (value.email.length > 100) { this.emailTextError = 'Your email can\'t be longer then 100 characters.' }
    else if (value.email.length == 0) { this.emailTextError = 'You must enter your email.' }
    else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi.test(value.email)) { this.emailTextError = 'That doesn\'t look like a valid email.' }
    else this.emailTextError = null;
  }
  companyCheck(value : any) {

    if (value.company.length == 0) { this.companyTextError = 'You must enter your name.' }
    else if (value.company.length < 2) { this.companyTextError = 'Your name must be at least 2 characters.' }
    else if (value.company.length > 50) { this.companyTextError = 'Your name must be at most 50 characters.' }
    else this.companyTextError = null;
  }
  subjectCheck(value : any) {

    if (value.subject.length == 0) { this.subjectTextError = 'You must enter your subject.' }
    else if (value.subject.length < 2) { this.subjectTextError = 'Your subject must be at least 2 characters.' }
    else if (value.subject.length > 50) { this.subjectTextError = 'Your subject must be at most 50 characters.' }
    else this.subjectTextError = null;
  }
  textAreaCheck(value : any) {

    if (value.detail.length == 0) { this.textAreaError = 'You must enter a message.' }
    else this.textAreaError = null;
  }

  onSubmit(formValue : EmailTemplate) {

    this.emailService.sendMessage(formValue, 'service_wd3vu1j', 'template_tkjnj4b')
    .then(()=> {

      this.messageSended = 'Sended!'

      setTimeout(() => {
        this.messageSended = ''
      }, 2000);
    })
  }

  poupopClicked() {
    // Elimina il poupop dallo schermo
    this.messageSended = ''
  }

  ngOnInit(): void {
    AOS.init();
    emailjs.init("hyjQk6Wq6kICV5Z7j");
  }
}
