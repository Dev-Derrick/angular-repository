import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent {

  name = 'derrick'
  location = 'pottsville'
  red = 'text-danger'

  whatIsDate() {
    return new Date()
  }

}
