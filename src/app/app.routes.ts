import { Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-panel/admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-panel/admin-dashboard/admin-dashboard.component';
import { AdminUsersComponent } from './admin-panel/admin-users/admin-users.component';
import { adminAuthGuard } from './guards/admin-auth/admin-auth.guard';
import { adminLoginGuard } from './guards/admin-login/admin-login.guard';
import { appLoginGuard } from './guards/app-login/app-login.guard';
import { AppLoginComponent } from './app-panel/app-login/app-login.component';
import { appAuthGuard } from './guards/app-auth/app-auth.guard';
import { AppDashboardComponent } from './app-panel/app-dashboard/app-dashboard.component';
import { AppLayoutComponent } from './app-panel/app-layout/app-layout.component';
import { AppHomeComponent } from './app-panel/app-home/app-home.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'app',
        pathMatch: 'full'
    },
    {
        path: 'app',
        children: [
            { 
                path: '',
                component: AppLayoutComponent,
                children: [
                    // redirect to home by default
                    {
                        'path': '',
                        redirectTo: 'home',
                        pathMatch: 'full'
                    },

                    // home screen
                    {
                        'path': 'home',
                        component: AppHomeComponent,
                    },

                    // auth
                    { 
                        path: 'login',
                        canActivate: [appLoginGuard],
                        component: AppLoginComponent
                    },

                    // dashboard
                    {
                        path: 'dashboard',
                        canActivate: [appAuthGuard],
                        component: AppDashboardComponent,
                        children: []
                    }
                ]
            },
            
        ]
    },
    {
        path: 'admin',
        children: [
            { 
                path: 'login',
                canActivate: [adminLoginGuard],
                component: AdminLoginComponent
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
