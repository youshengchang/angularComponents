import { Component, AfterViewInit } from '@angular/core';
import 'expose?jQuery!jquery';
import 'bootstrap';
import * as $ from 'jquery';

import { Accordion } from './components/accordion/accordion';

@Component({
  selector: 'app-root',
  //template: `<accordion></accordion>`,
  /*template: ` 
       <input type="text" [(ngModel)]="title" placeholder="enter custom title..">
    <h1 data-toggle="tooltip"
        data-placement="bottom"
        [title]="title">Angular2 components</h1>
        <collapse></collapse>
    `
  */
  //template: `<h1 text-marker='red'>Angular2 Components</h1>`
  template: `
    <input type="checkbox" [(ngModel)]="condition">show
    <p *onlyIf="condition">
      This content will shown only if the condition is true
    </p>
    `
  //styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
 // title = 'Angular2 Components';
  
  ngAfterViewInit(){
      $('h1').tooltip();
  }
  
}
