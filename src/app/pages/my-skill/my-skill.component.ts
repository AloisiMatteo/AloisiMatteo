import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-skill',
  templateUrl: './my-skill.component.html',
  styleUrls: ['./my-skill.component.scss']
})
export class MySkillComponent implements OnInit {


  
  ngOnInit(): void {
    document.documentElement.setAttribute('data-theme', 'dark');
    window.scrollTo(0,0);
  }

}
