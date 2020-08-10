import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './_helpers';
import { Role } from './_models';
import { LandingPageComponent } from './landing-page/landing-page.component';

import { AlbumsComponent } from './albums/albums.component';
import { AddAlbumComponent } from './add-album/add-album.component';
import { ShowAlbumComponent } from './show-album/show-album.component';
import { EditAlbumComponent } from './edit-album/edit-album.component';

const routes: Routes = [
    { path: "landing page", component: LandingPageComponent },
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'admin', component: AdminComponent, canActivate: [AuthGuard], data: { roles: [Role.Admin] } },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' },

    { path: 'albums', component: AlbumsComponent, data: { title: 'Albums' } },
  { path: 'show-album/:id', component: ShowAlbumComponent, data: { title: 'Show Album' } },
  { path: 'add-album', component: AddAlbumComponent, data: { title: 'Add Album' } },
  { path: 'edit-album/:id', component: EditAlbumComponent, data: { title: 'Edit Album' } },
];

// @NgModule({
//     imports: [RouterModule.forRoot(routes)],
//     exports: [RouterModule]
//   })
//   export class AppRoutingModule { }
export const appRoutingModule = RouterModule.forRoot(routes);