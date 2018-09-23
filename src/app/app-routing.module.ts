import { NotfoundComponent } from './components/notfound/notfound.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
    {
        path: 'auth',
        loadChildren: './auth/auth.module#AuthModule'
    },
    {
        path: '',
        pathMatch: 'full',
        component: HomeComponent
    },
    {
        path: '404',
        component: NotfoundComponent
    },
    {
        path: '**',
        redirectTo: '/404'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}