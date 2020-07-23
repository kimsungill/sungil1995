import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.scss']
})
export class UpdatePasswordComponent implements OnInit {
  userpassword: string;
  userpassword2: string;
  userid: string;
  userString: string;
  user: any;

  constructor(private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }
  onUpdateSubmit() {

    if(this.userpassword == undefined || this.userpassword2 == undefined) {
      this.flashMessage.show('모든 필드들을 채워주세요', { cssClass: 'alert-danger', timeout: 3000 });
      return false;
    }

    // 패스워드 값이 같은지 확인
    if (this.userpassword !== this.userpassword2) {
      console.log('패스워드가 다릅니다...');
      this.flashMessage.show('패스워드가 다릅니다. 다시 입력하세요', { cssClass: 'alert-danger', timeout: 3000 });
      return false;
    }

    this.userString = localStorage.getItem('user');
    this.user = JSON.parse(this.userString);
    this.userid = this.user.userid;

    const login = {
      userid: this.userid,
      userpassword: this.userpassword
    };

    this.authService.updatePassword(login).subscribe(data => {
      if (data.success) {
        this.flashMessage.show('변경 완료', { cssClass: 'alert-success', timeout: 5000 });
        this.router.navigate(['profile']);
      } else {
        this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
        this.router.navigate(['profile/updatePassword']);
      }
    });
  }

}
