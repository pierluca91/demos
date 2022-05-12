import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ListUsersService } from './list-users.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css'],
})
export class ListUsersComponent implements OnInit {
  utenti$ = new Subject();
  constructor(private listUserService: ListUsersService) {
    this.listUserService
      .getAllUsers()
      .pipe(tap((e) => console.log(e)))
      .subscribe(el => this.utenti$.next(el));
  }

  ngOnInit() {
    this.utenti$.subscribe(x => console.log(x))
  }
}
