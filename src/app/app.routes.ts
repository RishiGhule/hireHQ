import { Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { VerifyMailComponent } from './verify-mail/verify-mail.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/sign-up',
        pathMatch:'full'
        
    },
    {
        path: 'sign-up',
        component: SignUpComponent
    },
    {
        path: 'verify-mail',
        component: VerifyMailComponent
    },
    
];
