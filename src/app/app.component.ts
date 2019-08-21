import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { Export } from './models/export.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exports';
  
  exports: Export[]

  receiveExports($event) {
    this.exports = $event
    console.log('app component: ', this.exports);
  }
}
