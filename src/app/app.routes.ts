import { Routes } from '@angular/router';
import { LoginComponent } from './admin-panel/login/login.component';
import { AdminDashboardComponent } from './admin-panel/admin-dashboard/admin-dashboard.component';
import { AdminUsersComponent } from './admin-panel/admin-users/admin-users.component';
import { adminAuthGuard } from './guards/admin-auth/admin-auth.guard';
import { adminLoginGuard } from './guards/admin-login/admin-login.guard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'admin',
        pathMatch: 'full'
    },
    {
        path: 'admin',
        children: [
            { 
                path: 'login',
                canActivate: [adminLoginGuard],
                component: LoginComponent
            },
            { 
                path: '',
                canActivate: [adminAuthGuard],
                component: AdminDashboardComponent,
                children: [
                    {
                        'path': '',
                        redirectTo: 'users',
                        pathMatch: 'full'
                    },
                    {
                        'path': 'users',
                        component: AdminUsersComponent,
                    },
                ]
            },
        ]
    }
];
