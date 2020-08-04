import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  isShowBooksIf = true;

  toggleDisplayBooksIf() {
    this.isShowBooksIf = !this.isShowBooksIf;
  }

  isShowMusicIf = true;

  toggleDisplayMusicIf() {
    this.isShowMusicIf = !this.isShowMusicIf;
  }

  isShowNewIf = true;

  toggleDisplayNewIf() {
    this.isShowNewIf = !this.isShowNewIf;
  }
}
