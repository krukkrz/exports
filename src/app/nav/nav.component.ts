import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Export } from '../models/export.model';
import { ExportsService } from '../services/exports.service';
import { FormGroup, FormControl } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  exports = new Array<Export>()
  @Output() event = new EventEmitter<Export[]>()

  form = new FormGroup({
    local: new FormControl(),
    from: new FormControl(),
    to: new FormControl(),
  })

  constructor(
    private empService: ExportsService
  ){}

  ngOnInit() {
    this.getExp()
  }

  getExp(local?:string, from?:string, to?:string){

    if(from){
      from = moment(from).format('YYYY-MM-DDThh:mm:ssZ')
    }
    if(to){
      to = moment(to).format('YYYY-MM-DDThh:mm:ssZ')
    }

    console.log('local: ', local);
    console.log('from: ', from);
    console.log('to: ', to);
    
    this.empService.getExports(local, from, to).subscribe(
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
        this.event.emit(this.exports)
      }
    )
    
  }

}
