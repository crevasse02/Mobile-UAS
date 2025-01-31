import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactsPage } from './contacts.page';

const routes: Routes = [
  {
    path: '',
    component: ContactsPage
  },
  {
    path: ':contactId',
    loadChildren: () => import('./contact-detail/contact-detail.module').then( m => m.ContactDetailPageModule)
  },
  {
    path: 'creation/create',
    loadChildren: () => import('./creation/create/create.module').then( m => m.CreatePageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactsPageRoutingModule {}
