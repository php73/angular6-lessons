import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserListItemComponent} from './user-list-item/user-list-item.component';
import {UserFormComponent} from './user-form/user-form.component';
import {UserCardComponent} from './user-card/user-card.component';
import {UserListComponent} from './user-list/user-list.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    FormsModule,
    CommonModule
  ],
  declarations: [
    UserListItemComponent,
    UserFormComponent,
    UserCardComponent,
    UserListComponent
  ],
  exports: [
    UserFormComponent,
    UserCardComponent,
    UserListComponent
  ]
})
export class UserModule { }
