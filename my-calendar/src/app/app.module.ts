import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GmvDayComponent } from './gmv-day/gmv-day.component';

@NgModule({
  declarations: [
    AppComponent,
    GmvDayComponent
  ],
  exports:[
     GmvDayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
