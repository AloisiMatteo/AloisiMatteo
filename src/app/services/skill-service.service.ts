import { Injectable } from '@angular/core';
import { SkillsInterface } from '../interfaces/skills-interface';

@Injectable({
  providedIn: 'root'
})
export class SkillServiceService {

  private skillList: SkillsInterface[] = [
    { id: 0,
      immagine: "../../assets/images/angular.svg",
      titolo: "Angular",
      descrizione: "Framework used to develop websites with high importance, facilitating so the develop and the comprehensibility in team work case.",
      color: "red"
    },
    { id: 1,
      immagine: "../../assets/images/Rx_logo.png",
      titolo: "RxJS",
      descrizione: "Javascript library for reactive programming using Observables, to make it easier to compose asynchronous or callback-based code.",
      color: "#eb038f"
    },
    { id: 2,
      immagine: "../../assets/images/Typescript_logo.png",
      titolo: "TypeScript",
      descrizione: "Extension of JavaScript, it also manages logic and events within a web page.",
      color: "#0299e3"
    },
    { id: 3,
      immagine: "../../assets/images/JavaScript_logo.svg.png",
      titolo: "JavaScript",
      descrizione: "Language used to manage both the logical part and all the events that occur within a web page.",
      color: "#f7e018"
    },
    { id: 4,
      immagine: "../../assets/images/HTML_logo.png",
      titolo: "HTML",
      descrizione: "Language used to set up a structural scheme for the web page.",
      color: "rgb(255 129 70)"
    },
    { id: 5,
      immagine: "../../assets/images/css3.png",
      titolo: "CSS",
      descrizione: "Language used to define formatting rules in the various elements of a web page,  giving it so a unique style.",
      color: "#0299e3"
    },
  ]

  private listaFeatures: string[] = ['Great solid experience design', 'Formatting of the graphic, static and dynamic aspects of a web page'
  , 'Problem Solving']

  private listaDecorator = [
    {className: 'bi bi-telegram', nome: 'Telegram'},
    {className: 'bi bi-github', nome: 'GitHub'},
    {className: 'bi bi-linkedin', nome: 'Linkedin'},
    {className: 'bi bi-discord', nome: 'Discord'},
  ]

  constructor() { }

  getSkillList(): SkillsInterface[] {
    return this.skillList;
  }
  getSkillById(id: number): any {
    return this.skillList.find((skill) => skill.id == id)
  }
  getFeatureList() {
    return this.listaFeatures;
  }
  getDecoratorList() {
    return this.listaDecorator;
  }
}
