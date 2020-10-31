import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainMenuPage } from './main-menu.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/main-menu/tabs/home',
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    component: MainMenuPage,
    children:[
      {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'leaderboard',
        loadChildren: () => import('./leaderboard/leaderboard.module').then( m => m.LeaderboardPageModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainMenuPageRoutingModule {}
