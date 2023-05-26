import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {


  ngOnInit(): void {
    document.documentElement.setAttribute('data-theme', 'dark');
    window.scrollTo(0,0);
  }
}
