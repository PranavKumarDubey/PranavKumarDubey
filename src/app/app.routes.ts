import { Routes } from '@angular/router';
import { HomeComponent } from './portfolioComponent/home/home.component';
import { AboutComponent } from './portfolioComponent/about/about.component';
import { ProjectsComponent } from './portfolioComponent/projects/projects.component';
import { SkillsComponent } from './portfolioComponent/skills/skills.component';
import { ContactComponent } from './portfolioComponent/contact/contact.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'about',
        component:AboutComponent
    }, 
    {
        path: 'project',
        component:ProjectsComponent
    },
    {
        path: 'skills',
        component:SkillsComponent
    },
    {
        path: 'contact',
        component:ContactComponent
    },
    
];
