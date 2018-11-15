import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserListItemComponent} from './user-list-item/user-list-item.component';
import {UserFormComponent} from './user-form/user-form.component';
import {UserCardComponent} from './user-card/user-card.component';
import {UserListComponent} from './user-list/user-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserService} from './shared/user.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    UserListItemComponent,
    UserFormComponent,
    UserCardComponent,
    UserListComponent,
  ],
  exports: [
    UserFormComponent,
    UserCardComponent,
    UserListComponent
  ],
  providers: [
    UserService,
  ]
})
export class UserModule { }
