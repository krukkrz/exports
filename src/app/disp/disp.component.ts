import { Component, OnInit, Input } from '@angular/core';
import { Export } from '../models/export.model';

@Component({
  selector: 'app-disp',
  templateUrl: './disp.component.html',
  styleUrls: ['./disp.component.css']
})
export class DispComponent implements OnInit {

  constructor() { }

  @Input() exports: Export[]
  displayedColumns: string[] = ['name', 'date', 'time', 'user', 'local'];

  ngOnInit() {
  }


}
