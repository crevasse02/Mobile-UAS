import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesPage } from './recipes.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/recipes/tabs/discover',
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    component: RecipesPage,
    children: [
      {
        path: 'discover',
        loadChildren: () => import('./discover/discover.module').then( m => m.DiscoverPageModule)
      },
      {
        path: 'creation',
        loadChildren: () => import('./creation/creation.module').then( m => m.CreationPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipesPageRoutingModule {}
