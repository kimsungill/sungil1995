import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { ValidateService } from 'src/app/services/validate.service';

@Component({
  selector: 'app-emailregister',
  templateUrl: './emailregister.component.html',
  styleUrls: ['./emailregister.component.scss']
})
export class EmailregisterComponent implements OnInit {
  semail: string;
  cert: string;

  constructor(private validateService: ValidateService, private flashMessage: FlashMessagesService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  emailsend() {

    const email = {
      semail: this.semail
    }

    if (!email.semail) {
      this.flashMessage.show('빈칸이 있습니다.', { cssClass: 'alert-danger', timeout: 3000 });
      return false;
    }

    // Email validate
    else if (!this.validateService.validateEmail(email.semail)) {
      this.flashMessage.show('이메일 형식이 아닙니다.', { cssClass: 'alert-danger', timeout: 3000 });
      return false;
    }

    // email send
    else {
      alert("인증번호가 발송되었습니다.");
      this.authService.emailregisterUser(email).subscribe(data => {
        if (data == false) {
          this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
        }
      });
    }
  }

  emailcert() {

    const cert = {
      cert: this.cert
    }

    // email cert
    this.authService.emailcertUser(cert).subscribe(data => {
      if (data.success) {
        alert("가입이 완료되었습니다.")
        this.router.navigate(['/']);
      } else {
        this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
      }
    });
  }
}
