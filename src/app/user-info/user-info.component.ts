import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { User } from '../user';
import { UserService } from '../user.service';
import { UserCardComponent } from '../user-card/user-card.component'

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  user: User;
  users: User[];
  id: number;
  lat: number;
  lon: number;
  private subscription: Subscription

  constructor(private userService: UserService, private route: ActivatedRoute) {
    this.subscription = route.queryParams.subscribe(
      (queryParam: any) => {
        this.id = queryParam['id'];
      }
    );
    this.getUser();
  }

  getUser(): void {
    this.userService.getUsers()
    .subscribe(users => {
      this.users = users;
      this.users.forEach(
        el => {
          if (el.id === +this.id) this.user = el;
        }
      )
    })
  }

  ngOnInit() {
  }

}
