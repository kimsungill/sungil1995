import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { } from 'jquery';

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
  items = [];
  pageOfItems: Array<any>;
  test: any;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.readBoards(this.logs);
  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }

  // log 불러오기 기능
  readBoards(log) {
    this.userString = localStorage.getItem('user');
    this.user = JSON.parse(this.userString);
    // console.log(this.user);
    this.userid = this.user.userid;
    this.authService.readBoards(this.userid).subscribe(
      data => {
        this.logs = data['msg'];
        this.test = data['msg'];
        console.log(this.logs);
        this.items = Array(this.logs.length).fill(0).map((x, i) => ({ 
          id: this.logs[i]['_id'], 
          name: this.logs[i]['filename'], 
          uploadDate: this.logs[i]['uploadDate'], 
          userid: this.userid }));
        // console.log(this.test[0]['_id'])
        // console.log(JSON.parse(this.test.name))
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

  doDownload() {
    // this.authService.downloadBoard(this.logs._id);
  }

}
