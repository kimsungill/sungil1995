import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlankForReloadComponent } from './component/blank-for-reload/blank-for-reload.component';
import { DownloadappComponent } from './component/downloadapp/downloadapp.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { LogsComponent } from './component/logs/logs.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { ProfileComponent } from './component/profile/profile.component';
import { RegisterComponent } from './component/register/register.component';
import { SearchComponent } from './component/search/search.component';
import { UpdateEmailComponent } from './component/profile/update-email/update-email.component';
import { UpdatePasswordComponent } from './component/profile/update-password/update-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidateService } from './services/validate.service';
import { FlashMessagesModule, FlashMessagesService } from 'angular2-flash-messages';
import { HttpClientModule} from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthGuard } from './guards/auth.guard';
import { EmailregisterComponent } from './component/emailregister/emailregister.component';
import { JwPaginationComponent } from 'jw-angular-pagination';
import { TeamintroComponent } from './component/teamintro/teamintro.component';
import { ConceptComponent } from './component/concept/concept.component';

@NgModule({
  declarations: [
    AppComponent,
    BlankForReloadComponent,
    DownloadappComponent,
    HomeComponent,
    LoginComponent,
    LogsComponent,
    NavbarComponent,
    ProfileComponent,
    RegisterComponent,
    SearchComponent,
    UpdateEmailComponent,
    UpdatePasswordComponent,
    EmailregisterComponent,
    JwPaginationComponent,
    TeamintroComponent,
    ConceptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FlashMessagesModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('id_token');
        }
      }
    })
  ],
  providers: [ValidateService, FlashMessagesService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
