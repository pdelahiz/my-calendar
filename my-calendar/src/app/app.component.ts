import { Component } from '@angular/core';
import ServiceDate from './gmv-day/service.date';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ServiceDate]
})

export class AppComponent {
  title = 'my-calendar';
  day = 5;
}
