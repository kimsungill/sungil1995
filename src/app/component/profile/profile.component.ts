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
  userphone: number;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
      this.username = profile.user.username;
      this.userid = profile.user.userid;
      this.userphone = profile.user.userphone;
    }, err => {
      console.log(err);
      return false;
    });
  }

  doUpdatePassword() {
    this.router.navigate(['/profile/updatePassword']);
  }

  doUpdateEmail() {
    this.router.navigate(['/profile/updateEmail']);
  }

}
