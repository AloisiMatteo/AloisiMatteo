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

    if (value.email.length > 100) { this.emailTextError = 'La tua email non può contenere piu\' di 100 caratteri' }
    else if (value.email.length == 0) { this.emailTextError = 'L\'email è obbligatoria' }
    else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi.test(value.email)) { this.emailTextError = 'TInserisci un email valida.' }
    else this.emailTextError = null;
  }
  companyCheck(value : any) {

    if (value.company.length == 0) { this.companyTextError = 'Il nome è obbligatorio.' }
    else if (value.company.length < 2) { this.companyTextError = 'Il nome deve contenere almeno 2 caratteri' }
    else if (value.company.length > 50) { this.companyTextError = 'Il nome deve contenere al massimo 50 caratteri' }
    else this.companyTextError = null;
  }
  subjectCheck(value : any) {

    if (value.subject.length == 0) { this.subjectTextError = 'Il soggetto è obbligatorio.' }
    else if (value.subject.length < 2) { this.subjectTextError = 'Il soggetto deve contenere almeno 2 caratteri.' }
    else if (value.subject.length > 50) { this.subjectTextError = 'Il soggetto deve contenere al massimo 50 caratteri.' }
    else this.subjectTextError = null;
  }
  textAreaCheck(value : any) {

    if (value.detail.length == 0) { this.textAreaError = 'Il messaggio è obbligatorio' }
    else this.textAreaError = null;
  }

  onSubmit(formValue : EmailTemplate) {

    this.emailService.sendMessage(formValue, 'service_wd3vu1j', 'template_tkjnj4b')
    .then(()=> {

      this.messageSended = 'Messaggio Inviato!'

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
