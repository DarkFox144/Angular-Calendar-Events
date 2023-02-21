import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';

import { HttpClientModule } from '@angular/common/http';
import { CreateEventsComponent } from './create-events/create-events.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    CreateEventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
