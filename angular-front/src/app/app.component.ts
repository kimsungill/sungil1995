import { Component } from '@angular/core';

const array : Array<string> = ['data0','data1','data2']

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title : string = 'firstStudy';

  constructor(){
  }
}
