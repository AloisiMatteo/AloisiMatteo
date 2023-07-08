import { Injectable, OnInit } from '@angular/core';
import * as emailjs from "@emailjs/browser"
import { EmailTemplate } from '../interfaces/email-template';

@Injectable({
  providedIn: 'root'
})
export class EmailJsServiceService implements OnInit {

  templateParams : any

  constructor() { }

  async sendMessage(message: EmailTemplate, PUBLIC_KEY: string, TEMPLATE_KEY: string) {
    this.templateParams = {
      subject: message.subject,
      company: message.company,
      detail: message.detail,
      email: message.email
    }

    emailjs.send(PUBLIC_KEY, TEMPLATE_KEY, this.templateParams)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    })
  }

  ngOnInit(): void {
    emailjs.init("hyjQk6Wq6kICV5Z7j");
  }
}
