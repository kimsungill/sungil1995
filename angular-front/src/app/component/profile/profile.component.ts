import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  username: string;
  userid: string;
  semail: string;
  user: any;
  userString: any;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {

    // this.authService.getProfile().subscribe(profile => {
    //   this.name = profile.user.name;
    //   this.username = profile.user.username;
    //   this.email = profile.user.email;
    // }, err => {
    //   console.log(err);
    //   return false;
    // });

    // build 할때 401 에러시 사용 위에꺼 싹다 주석먹이고
    this.userString = localStorage.getItem('user');
    this.user = JSON.parse(this.userString);
    this.userid = this.user.userid;
    this.username = this.user.username;
    this.semail = this.user.semail;    
  }

  doUpdatePassword() {
    this.router.navigate(['/profile/updatePassword']);
  }

  doUpdateEmail() {
    this.router.navigate(['/profile/updateEmail']);
  }

}
