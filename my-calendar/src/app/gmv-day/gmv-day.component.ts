import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gmv-day',
  templateUrl: './gmv-day.component.html',
  styleUrls: ['./gmv-day.component.css']
})


export class GmvDayComponent implements OnInit {
  @Input() day: Number;

  constructor() { }

  ngOnInit() {
  }

}
