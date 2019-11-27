import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { WeatherForecastComponent } from './WeatherForecast/WeatherForecast.component';
import { AuthService } from './_service/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { NavComponent } from './nav/nav.component';
import { ErrorInterceptorProvider } from './_service/error.interceptor';
import { MemberListComponent } from './nav/member-list/member-list.component';
import { ListsComponent } from './nav/lists/lists.component';
import { MessagesComponent } from './nav/messages/messages.component';
import { appRoutes } from './routes';

@NgModule({
  declarations: [
    AppComponent,
    WeatherForecastComponent,
    HomeComponent,
    RegisterComponent,
    NavComponent,
    MemberListComponent,
    ListsComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthService,
    ErrorInterceptorProvider
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
