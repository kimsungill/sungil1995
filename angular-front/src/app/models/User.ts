// 사용자 등록시 서버에 전송하는 정보의 데이터 모델.
export class User {
    username: string;
    userid: string;
    userpassword: string;
    userpassword2: string;
    userphone: number;
  }
  
  // 로그인시 서버에 보내는 정보의 데이터 모델
  export class Login {
    userid: string;
    userpassword: string;
  }
  
  // 로그인된 사용자의 데이터 모델.
  // 패스워드 정보는 보안을 위해 삭제하고 사용함.
  export class UserNoPW {
    username: string;
    userid: string;
    userphone: number;
  }

  // 이메일 인증 데이터 모델
  export class Email {
    semail: string;
  }
  
  export class Cert {
    cert: string;
  }