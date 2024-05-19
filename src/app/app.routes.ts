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
import { HomeLayoutComponent } from './home-panel/home-layout/home-layout.component';
import { AppHomeComponent } from './home-panel/app-home/app-home.component';
import { CreateListingComponent } from './home-panel/create-listing/create-listing.component';
import { CompanyRegistrationComponent } from './home-panel/company-registration/company-registration.component';
import { AdminListingsComponent } from './admin-panel/admin-listings/admin-listings.component';
import { AdminOffersComponent } from './admin-panel/admin-offers/admin-offers.component';
import { AppJobsComponent } from './app-panel/app-jobs/app-jobs.component';
import { AppOffersComponent } from './app-panel/app-offers/app-offers.component';
import { AppListingsComponent } from './home-panel/app-listings/app-listings.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeLayoutComponent,
        children: [
            // redirect to home by default

            // home screen
            {
                'path': '',
                component: AppHomeComponent,
            },

            // create listing
            {
                path: 'create-listing',
                component: CreateListingComponent,
            },

            // company registration
            {
                path: 'company-registration',
                component: CompanyRegistrationComponent,
            },
        ]
    },

    {
        path: 'app',
        children: [
            { 
                path: 'login',
                canActivate: [appLoginGuard],
                component: AppLoginComponent
            },
            { 
                path: 'dashboard',
                canActivate: [appAuthGuard],
                component: AppDashboardComponent,
                children: [
                    {
                        path: '',
                        redirectTo: 'jobs',
                        pathMatch: 'full'
                    },
                    {
                        path: 'jobs',
                        component: AppJobsComponent
                    },
                    {
                        path: 'offers',
                        component: AppOffersComponent
                    },
                    {
                        path: 'listings',
                        component: AppListingsComponent
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
                    {
                        'path': 'listings',
                        component: AdminListingsComponent,
                    },
                    {
                        'path': 'offers',
                        component: AdminOffersComponent,
                    },
                ]
            },
        ]
    }
];
