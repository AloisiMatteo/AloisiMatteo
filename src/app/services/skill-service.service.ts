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
      descrizione: "Framework utilizzato per sviluppare siti web di grande importanza, facilitandone così lo sviluppo e la comprensibilità in caso di lavoro in team.",
      color: "red"
    },
    { id: 1,
      immagine: "../../assets/images/Rx_logo.png",
      titolo: "RxJS",
      descrizione: "Libreria Javascript per la programmazione reattiva utilizzando observables, per facilitare la composizione di codice asincrono o basato su callback.",
      color: "#eb038f"
    },
    { id: 2,
      immagine: "../../assets/images/Typescript_logo.png",
      titolo: "TypeScript",
      descrizione: "Estensione di JavaScript, anch'essa gestisce logica ed eventi all'interno di una pagina web.",
      color: "#0299e3"
    },
    { id: 3,
      immagine: "../../assets/images/JavaScript_logo.svg.png",
      titolo: "JavaScript",
      descrizione: "Linguaggio utilizzato per gestire sia la parte logica che tutti gli eventi che accadono all'interno di una pagina web.",
      color: "#f7e018"
    },
    { id: 4,
      immagine: "../../assets/images/HTML_logo.png",
      titolo: "HTML",
      descrizione: "Linguaggio utilizzato per impostare uno schema strutturale per la pagina web, schema che viene decorato successivamente attraverso il CSS.",
      color: "rgb(255 129 70)"
    },
    { id: 5,
      immagine: "../../assets/images/css3.png",
      titolo: "CSS",
      descrizione: "Linguaggio utilizzato per definire le regole di formattazione nei vari elementi di una pagina web, conferendole uno stile unico.",
      color: "#0299e3"
    },
  ]

  private listaFeatures: string[] = [
    'Design con esperienza solida',
    'Formattazione degli aspetti grafici, statici e dinamici di una pagina web',
    'Problem Solving']

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
