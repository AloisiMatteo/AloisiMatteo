import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegularButtonComponent } from './ui-kit/buttons/regular-button/regular-button.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { FooterComponent } from './footer/footer.component';
import { AboutHeaderComponent } from './about-header/about-header.component';
import { MySkillComponent } from './pages/my-skill/my-skill.component';
import { SkillHeaderComponent } from './skill-header/skill-header.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ContactHeaderComponent } from './contact-header/contact-header.component';
import { FormsModule } from '@angular/forms';
import { SingleSkillComponent } from './skill-header/single-skill/single-skill.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegularButtonComponent,
    HomepageComponent,
    HeaderComponent,
    AboutMeComponent,
    FooterComponent,
    AboutHeaderComponent,
    MySkillComponent,
    SkillHeaderComponent,
    ContactComponent,
    ContactHeaderComponent,
    SingleSkillComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
