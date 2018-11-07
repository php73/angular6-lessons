import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked,
  AfterViewInit,
  Component, ContentChild, DoCheck,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Input, OnChanges, OnDestroy,
  OnInit,
  Output, SimpleChanges,
  ViewChild
} from '@angular/core';
import {User} from '../shared/user';
import {UserListComponent} from '../user-list/user-list.component';
import {UserCardComponent} from '../user-card/user-card.component';
import {DatePipe} from '@angular/common';
import {UserService} from '../shared/user.service';

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.css']
})
export class UserListItemComponent {
  @Input() user: User;

  constructor(private userService: UserService) {
  }

  update() {
    this.userService.currentId.next(this.user.id);
  }

  delete() {
    this.userService.deleteUser(this.user.id);
    this.userService.save();
  }

  show() {
    this.userService.viewId.next(this.user.id);
  }
}
