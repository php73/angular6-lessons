import { BrowserModule } from '@angular/platform-browser';
import {Injectable, InjectionToken, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import {UserModule} from './user/user.module';
import {UserService} from './user/shared/user.service';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    RouterModule,
    AppRoutingModule,
    BrowserModule,
    UserModule,
  ],
  providers: [
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
