import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import {} from 'jquery';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent implements OnInit {
  user: any;
  userString: string;
  userid: string;
  filename: string;
  logs: any[];

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.readBoards(this.logs);
  }

// log 불러오기 기능
readBoards(log) {
  this.userString = localStorage.getItem('user');
  this.user = JSON.parse(this.userString);
  this.userid = this.user.userid;
  this.authService.readBoards(this.userid).subscribe(
    data => {
      this.logs = data['msg'];
    },
    error => {
      console.log(error);
    }
  )
}

// 로그 검색 기능
searchLog() {
  this.userString = localStorage.getItem('user');
  this.user = JSON.parse(this.userString);
  this.userid = this.user.userid;
  this.router.navigate(['/search/' + this.userid + '/' + $('#filename').val()]);
}

}
