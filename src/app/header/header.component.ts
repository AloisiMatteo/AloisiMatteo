import { Component, OnDestroy, OnInit } from '@angular/core';
import { fromEvent, noop, tap } from 'rxjs';
import { SkillServiceService } from '../services/skill-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  currentScroll: number = 0;
  styleText : string = '';
  styleContainer : string = '';

  $scrollEvent : any;

  listaFeatures: string[] = []

  listaDecorator: {className: string, nome: string}[] = []

  constructor(private skillService: SkillServiceService) {
    this.listaFeatures = this.skillService.getFeatureList();
    this.listaDecorator = this.skillService.getDecoratorList();
  }

  ngOnInit(): void {

    this.currentScroll = window.scrollY;
    let maxScroll = 400;

    this.$scrollEvent = fromEvent(document, 'scroll')
    .pipe(
      tap(()=> {
        this.currentScroll = window.scrollY;

        if (this.currentScroll <= maxScroll) {

          this.styleText = `opacity: ${1 - (this.currentScroll/maxScroll)}`;
          this.styleContainer = `transform: translateY(${350 * (this.currentScroll/maxScroll)}px)`
        }
      })
    ).subscribe(noop);
  }
  ngOnDestroy(): void {
    this.$scrollEvent.unsubscribe();
  }
}
