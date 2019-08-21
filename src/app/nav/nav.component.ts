import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Export } from '../models/export.model';
import { ExportsService } from '../services/exports.service';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  exports = new Array<Export>()
  @Output() event = new EventEmitter<Export[]>()

  constructor(
    private empService: ExportsService
  ){}

  ngOnInit() {
  }

  getExp(){
    this.empService.getExports().subscribe(
      res => {
        this.exports = res.map(
          item => {
            return new Export(
              item.id,
              item.name,
              item.date_time,
              item.user,
              item.local
            )
          }
        )
        console.log(this.exports);
        this.event.emit(this.exports)
      }
    )
    
  }

}
