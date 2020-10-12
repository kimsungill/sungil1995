import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { ProfileComponent } from './component/profile/profile.component';
import { UpdatePasswordComponent } from './component/profile/update-password/update-password.component';
import { UpdateEmailComponent } from './component/profile/update-email/update-email.component';
import { LogsComponent } from './component/logs/logs.component';
import { DownloadappComponent } from './component/downloadapp/downloadapp.component';
import { SearchComponent } from './component/search/search.component';
import { BlankForReloadComponent } from './component/blank-for-reload/blank-for-reload.component';
import { AuthGuard } from './guards/auth.guard';
import { EmailregisterComponent } from './component/emailregister/emailregister.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'profile/updatePassword', component: UpdatePasswordComponent, canActivate: [AuthGuard] },
  { path: 'profile/updateEmail', component: UpdateEmailComponent, canActivate: [AuthGuard] },
  { path: 'logs/:userid', component: LogsComponent, canActivate: [AuthGuard] },
  { path: 'download', component: DownloadappComponent },
  { path: 'search/:userid/:filename', component: SearchComponent, canActivate: [AuthGuard] },
  { path: 'blank-for-reload', component: BlankForReloadComponent },
  { path: 'emailregister', component: EmailregisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
