import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {User} from '../shared/user';
import {UserService} from '../shared/user.service';
import {BehaviorSubject, interval, Observable, of, throwError} from 'rxjs';
import {HttpClient, HttpEvent, HttpRequest, HttpXhrBackend} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';

class HttpHandler extends HttpXhrBackend {

  handle(req: HttpRequest<any>): Observable<HttpEvent<any>> {
    return super.handle(req);
  }
}

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  user: User;

  constructor(private userService: UserService, private http: HttpClient, private router: Router, private route: ActivatedRoute) {

    // let request = this.http.get('http://angular_lessons.local:8001/user/1', {responseType: 'json'});
    // request = this.http.get('http://angular_lessons.local:8001/user/1', {responseType: 'json'});
    // request.pipe(map((value: User) => {
    //   value.surname = 'AAAAAAAAAAAAAAAAAAAAAAAAAa';
    //   return value;
    // })).subscribe((user: User) => {
    //   console.log(user);
    // });
    // this.user = this.userService.getUser(this.route.snapshot.params.id);
    // this.userService.viewId.subscribe((id: number) => {
    //   this.user = this.userService.getUser(id);
    // });
  }

  ngOnInit(): void {
    console.log(<number>this.route.snapshot.params.id);
    this.user = this.userService.getUser(<number>this.route.snapshot.params.id);
    console.log(this.user);
  }
}
