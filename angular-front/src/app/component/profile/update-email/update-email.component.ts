import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ValidateService } from 'src/app/services/validate.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-email',
  templateUrl: './update-email.component.html',
  styleUrls: ['./update-email.component.scss']
})
export class UpdateEmailComponent implements OnInit {
  userid: string;
  userString: string;
  user: any;
  userphone: number;

  constructor(private flashMessage: FlashMessagesService, private validateService: ValidateService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onUpdateSubmit() {

    if(this.userphone == undefined) {
      this.flashMessage.show('모든 필드들을 채워주세요', { cssClass: 'alert-danger', timeout: 3000 });
      return false;
    }

    // // 이메일 주소 유효성 검사
    // if (!this.validateService.validateEmail(this.email)) {
    //   this.flashMessage.show('유효한 이메일주소를 입력하세요', { cssClass: 'alert-danger', timeout: 3000 });
    //   return false;
    // }

    this.userString = localStorage.getItem('user');
    this.user = JSON.parse(this.userString);
    this.userid = this.user.userid;

    const login = {
      userid: this.userid,
      userphone: this.userphone
    };

    this.authService.updateEmail(login).subscribe(data => {
      if (data.success) {
        this.flashMessage.show('변경 완료', { cssClass: 'alert-success', timeout: 5000 });
        this.router.navigate(['profile']);
      } else {
        this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
        this.router.navigate(['profile/updateEmail']);
      }
    });
  }

}
