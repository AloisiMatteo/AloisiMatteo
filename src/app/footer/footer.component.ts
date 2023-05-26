import { Component } from '@angular/core';
import { IFooterItemsInterface } from '../interfaces/i-footer-items-interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  footerItems : IFooterItemsInterface[] = [
    { title: 'Pages', subtitle: ['About', 'Skills', 'Works', 'Contact'], scrollActive: false},
    { title: 'References', subtitle: ['Phone: +3488342350', 'Email: 99matteoaloisi@gmail.com'], scrollActive: false},
  ]


  toggleLabel(title: string): void {
    this.footerItems.forEach((value) => {
      if(title == value.title) value.scrollActive = !value.scrollActive;
    })
  }

  constructor() { }

  ngOnInit(): void {
  }
}
