import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {


  ngOnInit(): void {
    document.documentElement.setAttribute('data-theme', 'dark');
    window.scrollTo(0,0);
  }

}
