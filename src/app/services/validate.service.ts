import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { }

  // 회원가입 검사
  validateRegister(user) {
    if (
      user.username == undefined ||
      user.userid == undefined ||
      user.userpassword == undefined ||
      user.userpassword != user.userpassword2 ||
      user.userphone == undefined
    ) {
      return false;
    } else {
      return true;
    }
  }
  
  // // 이메일 유효성 검사
  // validateEmail(email) {
  //   var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //   return re.test(email);
  // }
}
