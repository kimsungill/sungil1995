import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userid: string;
  userpassword: string;

  constructor(private authService: AuthService, private router: Router, private flashMessage: FlashMessagesService) { }

  ngOnInit() {
  }

  // 로그인 버튼 눌렀을때 발동
  onLoginSubmit() {
    const login = {
      userid: this.userid,
      userpassword: this.userpassword
    }

    // 로그인 검증
    this.authService.authenticateUser(login).subscribe(data => {
      if (data.success) {
        this.authService.storeUserData(data.token, data.userNoPW);
        this.router.navigate(['/']);
      } else if (data.auth == false) {
        alert("이메일 인증 후 가입이 완료됩니다.");
        this.router.navigate(['/emailregister']);
      } else {
        this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
        this.router.navigate(['/login']);
      }
    });
  }

}
