import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-child',
  templateUrl: './first-child.component.html',
  styleUrls: ['./first-child.component.scss']
})
export class FirstChildComponent implements OnInit {

  isDisplayed: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  showDiv() {
    this.isDisplayed = !this.isDisplayed;
  }

}
