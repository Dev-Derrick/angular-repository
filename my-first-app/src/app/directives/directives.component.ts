import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  constructor() { }

  style = { 'font-size': '12px' }
  classes = { 'alert': true, 'alert-info': true }
  btPr = true

  mobiles = [ // of mobiles
    { os: 'android', ver: 12},
    { os: 'windows', ver: 12},
    { os: 'iOS', ver: 15 }
  ]

  day = 2

  ngOnInit(): void {
  }

  btnClk() {
    this.btPr = !this.btPr
    this.classes.alert = !this.classes.alert
    this.classes['alert-info'] = !this.classes['alert-info']
  }
}
