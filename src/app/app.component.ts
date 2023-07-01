import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  showContent = false;

  constructor(){
    setTimeout(() => {
      this.showContent = true;
    }, 2700);
  }
  ngOnInit(): void {
    Aos.init();
  }
}
