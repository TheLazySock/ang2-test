import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';
import { UserInfoComponent } from '../user-info/user-info.component';


@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  //Не особо понимал (хотя, честно говоря, не понимаю и до сих пор) почему тут нужен @Input(), 
  //но в гайде на angular.io так было и у меня именно так и заработало .
  //Если я правильно понял, то это что-то вроде реактивного связывания или динамического компонента.
  //Но именно что-то вроде, т.к. это всё же не компонент, а данные.
  //И тогда получается что @Input необходим для передачи данных в родительский компонент. Думаю как-то так.
  @Input() user: User;
  

  constructor(private router: Router) { }

  showInfo() {
    this.router.navigate(['info'], {
      queryParams: {
        'id': this.user.id
      }
    })
  }

  ngOnInit() {
    
  }
}
