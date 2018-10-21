import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserListItemComponent } from './user/user-list-item/user-list-item.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import {FormsModule} from '@angular/forms';
import { UserCardComponent } from './user/user-card/user-card.component';
import { UserListComponent } from './user/user-list/user-list.component';
import {UserModule} from './user/user.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    UserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
