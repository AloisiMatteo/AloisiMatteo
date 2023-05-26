import { Component, Input, OnInit } from '@angular/core';
import * as AOS from "aos"
import { SkillServiceService } from '../services/skill-service.service';
import { SkillsInterface } from '../interfaces/skills-interface';

@Component({
  selector: 'app-skill-header',
  templateUrl: './skill-header.component.html',
  styleUrls: ['./skill-header.component.scss']
})
export class SkillHeaderComponent implements OnInit{

  @Input() linked : boolean = false;
  URLPrefix!: string

  skillList: SkillsInterface[] = []

  constructor(private skillService: SkillServiceService) {
    this.skillList = this.skillService.getSkillList()
  }


  checkLinked() : string {
    if (this.linked) return 'link-on'
    else return 'link-off'
  }

  ngOnInit(): void {
    if (this.linked) this.URLPrefix = ''
    else this.URLPrefix = 'skills/'
    AOS.init();
  }
}
