import { Component, OnInit } from '@angular/core';
import { fromEvent, map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  navBarItemsLeft : string[] = ['ABOUT', 'SKILL', 'CONTACT'];
  navBarDownscrollItems : string[] = ['All features', 'For file sharing', 'For collaboration', 'For data security'
  , 'For branding', 'For last feedback'];
  adaptNavItems : string[] = ['ABOUT', 'SKILL', 'CONTACT'];

  hamburgerIsActive : boolean = false;
  showFeature : boolean = false;

  toggleHamburgerStatus() {
    this.hamburgerIsActive = !this.hamburgerIsActive;
  }
  toggleDownscroll() {
    this.showFeature = !this.showFeature
  }

  media(query: string): Observable<boolean> {
    const mediaQuery = window.matchMedia(query);
    return fromEvent<MediaQueryList>(mediaQuery, 'change').pipe(
      startWith(mediaQuery),
      map((list: MediaQueryList) => list.matches)
    );
  }

  constructor() { }

  ngOnInit(): void {
    this.media('(max-width: 1024px)').subscribe((matches) =>
    this.hamburgerIsActive = false
    );
  }
}
