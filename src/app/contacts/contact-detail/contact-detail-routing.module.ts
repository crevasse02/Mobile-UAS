import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactDetailPage } from './contact-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ContactDetailPage
  },
  {
    path: 'edit',
    loadChildren: () => import('./edit/edit.module').then( m => m.EditPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactDetailPageRoutingModule {}
