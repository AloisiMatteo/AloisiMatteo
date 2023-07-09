import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { SkillsInterface } from 'src/app/interfaces/skills-interface';
import { SkillServiceService } from 'src/app/services/skill-service.service';

@Component({
  selector: 'app-single-skill',
  templateUrl: './single-skill.component.html',
  styleUrls: ['./single-skill.component.scss']
})
export class SingleSkillComponent implements OnInit {

  skill!: SkillsInterface
  showContainer: boolean = false

  constructor(private route: ActivatedRoute, private skillService: SkillServiceService, private router: Router) {}

  closeWindow() {
    this.router.navigateByUrl('skill')
    .then(()=> {
      this.showContainer = false
    })
  }

  ngOnInit(): void {

    let idSkill = this.route.snapshot.params['id']
    this.skill = this.skillService.getSkillById(idSkill)

    this.route.params
    .subscribe((param: Params) => {
      this.showContainer = true
      idSkill = param['id']
      this.skill = this.skillService.getSkillById(idSkill)
    })
  }
}
