import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { RegisterPage } from './pages/register-page/register-page';
import { LoginPage } from './pages/login-page/login-page';
import { AdoptPage } from './pages/adopt-page/adopt-page';
import { InfoPage } from './pages/info-page/info-page';
import { UserPage } from './pages/user-page/user-page';

export const routes: Routes = [
    {path: '', component: HomePage},
    {path: 'home', component:HomePage},
    {path: 'adopt', component:AdoptPage},
    {path: 'info', component:InfoPage},
    {path: 'register', component:RegisterPage},
    {path: 'login', component:LoginPage},
    {path: 'user', component:UserPage}
   
];
