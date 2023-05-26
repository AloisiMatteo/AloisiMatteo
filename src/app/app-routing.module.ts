import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { MySkillComponent } from './pages/my-skill/my-skill.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SingleSkillComponent } from './skill-header/single-skill/single-skill.component';

const routes: Routes = [
  { path: '', component: HomepageComponent},

  { path: 'about', component: AboutMeComponent },

  { path: 'skills', component: MySkillComponent, children: [
    { path: ':id', component: SingleSkillComponent }
  ] },

  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }