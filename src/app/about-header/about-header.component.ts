import { Component, OnInit } from '@angular/core';
import * as AOS from "aos"

@Component({
  selector: 'app-about-header',
  templateUrl: './about-header.component.html',
  styleUrls: ['./about-header.component.scss']
})
export class AboutHeaderComponent implements OnInit {



  ngOnInit(): void {
    AOS.init();
  }

}
