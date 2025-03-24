import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';

export const routes: Routes = [
    {path:'about',component:AboutComponent},
    {path:'login',component:LoginComponent},
    {path:'contact',component:ContactComponent},
    {
        path:'profile',component:ProfileComponent
    },{
        path:'home',component:HomeComponent
    },
    {path:'user/:id/:name',component:UserComponent}
];
