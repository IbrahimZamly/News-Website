import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './views/sign-up/sign-up.component';
import { ProfileComponent } from './views/profile/profile.component';
import { LoginComponent } from './views/login/login.component';
import { AddNewsComponent } from './views/add-news/add-news.component';
import { ViewNewsComponent } from './views/view-news/view-news.component';
import { EditNewsComponent } from './views/edit-news/edit-news.component';
import { AuthGaurdService } from './services/auth-gaurd.service';

const routes: Routes = [
  {path:'sign-up',component:SignUpComponent},
  {path:'login',component:LoginComponent},
  {path:'profile',component:ProfileComponent,canActivate:[AuthGaurdService]},
  {path:'add-news',component:AddNewsComponent,canActivate:[AuthGaurdService]},
  {path:'view-news',component:ViewNewsComponent,canActivate:[AuthGaurdService]},
  {path:'edit-news/:id',component:EditNewsComponent,canActivate:[AuthGaurdService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
