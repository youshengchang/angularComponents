import { Component, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'collapse',
  templateUrl: './collapse.html'
})

export class Collapse implements AfterViewInit {
  ngAfterViewInit() {
    $('.collapse').collapse();
  }
}