import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, Login, UserNoPW, Email, Cert } from '../models/user';
import { JwtHelperService } from '@auth0/angular-jwt';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  authToken: any;
  userNoPW: UserNoPW;

  constructor(private http: HttpClient,
    public jwtHelper: JwtHelperService) { }

  prepEndpoint(ep) {
    // 1. localhost에 포팅시
    // return 'http://localhost:3000/' + ep;

    // 2. Heroku 클라우드 서버에 포팅 시
     return ep;
  }

  // 회원가입
  registerUser(user): Observable<any> {
    const registerUrl = this.prepEndpoint('users/register');
    return this.http.post<User>(registerUrl, user, httpOptions);
  }

  // 이메일인증
  emailregisterUser(email): Observable<any> {
    const emailregisterUrl = this.prepEndpoint('cert/emailregister');
    return this.http.post<Email>(emailregisterUrl, email, httpOptions);
  }

  // 인증비교
  emailcertUser(cert): Observable<any> {
    const emailregisterUrl = this.prepEndpoint('cert/emailregister');
    return this.http.post<Cert>(emailregisterUrl, cert, httpOptions);
  }

  // 로그인
  authenticateUser(login): Observable<any> {
    const loginUrl = this.prepEndpoint('users/authenticate');
    return this.http.post<Login>(loginUrl, login, httpOptions);
  }

  // 비밀번호 변경
  updatePassword(userNoPW): Observable<any> {
    const updatePasswordUrl = this.prepEndpoint('users/profile/updatePassword');
    return this.http.put<Login>(updatePasswordUrl, userNoPW, httpOptions);
  }

  // 이메일 변경
  updateEmail(userNoPW): Observable<any> {
    const updateEmailUrl = this.prepEndpoint('users/profile/updateEmail');
    return this.http.put<Login>(updateEmailUrl, userNoPW, httpOptions);
  }

  // 프로필
  getProfile(): Observable<any> {
    this.authToken = localStorage.getItem('id_token');
    const httpOptions1 = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Headers': '*',
        'Content-Type': 'application/json',
        'Authorization': this.authToken
      })
    };
    const profileUrl = this.prepEndpoint('users/profile');
    return this.http.get(profileUrl, httpOptions1);
  }

  // 로컬스토리지 업데이트
  storeUserData(token, userNoPW) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(userNoPW));
    this.authToken = token;
    this.userNoPW = userNoPW;
  }

  // 로그아웃
  logout() {
    this.authToken = null;
    this.userNoPW = null;
    localStorage.clear();
  }

  // 로그인 확인
  loggedIn() {
    return !this.jwtHelper.isTokenExpired(this.authToken);
  }

  // 로그 목록 불러오기
  readBoards(username: string) {
    const LogUrl = this.prepEndpoint('logs/logread/' + username);
    return this.http.get(LogUrl, httpOptions);
  }

  // 로그 검색
  readBoard(filename: string, userid: string): Observable<any> {
    const LogOneUrl = this.prepEndpoint('logs/search/' + userid + '/' + filename);
    return this.http.get(LogOneUrl, httpOptions);
  }

}
