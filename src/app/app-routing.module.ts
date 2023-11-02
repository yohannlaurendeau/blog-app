import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'feed',
    loadChildren: () => import('./features/feed/feed.module').then((m) => m.FeedModule)
  },
{
    path: 'connect',
    loadChildren: ()=> import('./features/connect/connect.module').then((m) => m.ConnectModule)
  },
  {
    path: 'create-account',
    loadChildren: ()=> import('./features/create-account/create-account.module').then((m) => m.CreateAccountModule)
  },
  {
    path: '',
    redirectTo: '/connect',
    pathMatch: 'full'
  },
  {
    path: 'form-contact',
    loadChildren: ()=> import('./features/form-contact/form-contact.module').then((m) => m.FormContactModule)
  },
  {
    path: 'user-profile',
    loadChildren: ()=> import('./features/user-profile/user-profile.module').then((m) => m.UserProfileModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
