import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Event } from "../models/event";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  events: Event[] = [];

  private eventsUrl = 'http://localhost:3000/events';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Event[]>(this.eventsUrl).subscribe(
      data => this.events = data
    );
  }

  onHourFilterChanged(value: any) {

  }

}
