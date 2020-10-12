import { Component, OnInit } from '@angular/core';
import { ValidateService } from 'src/app/services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  username: string;
  userid: string;
  userpassword: string;
  userpassword2: string;
  userphone: number;

  constructor(private validateService: ValidateService, private flashMessage: FlashMessagesService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }
  onRegisterSubmit() {

    const user = {
      username: this.username,
      userid: this.userid,
      userpassword: this.userpassword,
      userpassword2: this.userpassword2,
      userphone: this.userphone
    }

    // // Required Fields
    // if (!this.validateService.validateRegister(user)) {
    //   this.flashMessage.show('빈칸이 있습니다.', { cssClass: 'alert-danger', timeout: 3000 });
    //   return false;
    // }

    // Register User
    this.authService.registerUser(user).subscribe(data => {
      if (data.success) {
        this.router.navigate(['/login']);
      } else {
        this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
      }
    });

  }
}
