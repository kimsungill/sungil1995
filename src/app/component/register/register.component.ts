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

    // Password Check
    if(this.userpassword !== this.userpassword2) {
      this.flashMessage.show('Password wrong. try again', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }

    const user = {
      username: this.username,
      userid: this.userid,
      userpassword: this.userpassword,
      userpassword2: this.userpassword2,
      userphone: this.userphone
    }

    // Required Fields
    if(!this.validateService.validateRegister(user)) {
      this.flashMessage.show('all blank', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }

    // // // Validate Email
    // if(!this.validateService.validateEmail(user.email)) {
    //   this.flashMessage.show('email false', {cssClass: 'alert-danger', timeout: 3000});
    //   return false;
    // }

    // Register User
    this.authService.registerUser(user).subscribe(data => {
      if(data.success) {
        this.flashMessage.show('You are now registered and can log in', {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/login']);
      } else {
        this.flashMessage.show(data['msg'], {cssClass: 'alert-danger', timeout: 3000});
        this.router.navigate(['/register']);
      }
    });

  }
}
