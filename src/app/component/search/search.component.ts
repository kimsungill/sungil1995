import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  filename: any;
  user: any;
  userString: string;
  userid: string;
  logs: any[];

  constructor(private route: ActivatedRoute, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.readBoard(this.logs);
  }

  readBoard(log) {
    this.userString = localStorage.getItem('user');
    this.user = JSON.parse(this.userString);
    this.userid = this.user.userid;
    this.filename = this.route.snapshot.params['filename'];
    this.authService.readBoard(this.filename, this.userid).subscribe(
      data => {
        this.logs = data['msg'];
      },
      error => {
        console.log(error);
      }
    )
  }

  searchLog() {
    this.userString = localStorage.getItem('user');
    this.user = JSON.parse(this.userString);
    this.userid = this.user.userid;
    this.filename = $('#filename').val();
    this.router.navigateByUrl('/blank-for-reload', {
      skipLocationChange: true,
    }).then(
      () => {
        this.router.navigate(['/search/' + this.userid + '/' + this.filename]);
      }
    );
  }

}
