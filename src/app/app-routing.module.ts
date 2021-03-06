import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { BlankComponent } from './pages/blank/blank.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './utils/guards/auth.guard';
import { NonAuthGuard } from './utils/guards/non-auth.guard';

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: 'profile',
                component: ProfileComponent,
                canActivate: [AuthGuard]
            },
            {
                path: 'blank',
                component: BlankComponent,
                canActivate: [AuthGuard]
            },
            {
                path: '',
                // component: DashboardComponent
                loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule),
                canActivate: [AuthGuard]
            },
            {
                path: 'worker',
                loadChildren: () => import('./pages/workers/worker.module').then(m => m.WorkerModule),
                canActivate: [AuthGuard]
            },
            {
                path: 'zonalengineer',
                loadChildren: () => import('./pages/zonalengineer/zonalengineer.module').then(m => m.ZonalengineerModule),
                canActivate: [AuthGuard]
            },
            {
                path: 'contractor',
                loadChildren: () => import('./pages/contractor/contractor.module').then(m => m.ContractorModule),
                canActivate: [AuthGuard]
            }

        ]
    },
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [NonAuthGuard]
    },
    {
        path: 'register',
        component: RegisterComponent,
        canActivate: [NonAuthGuard]
    },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        useHash: true,
    })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
