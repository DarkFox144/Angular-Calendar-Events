import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private eventsUrl = '/event.json';  // URL de l'emplacement du fichier JSON

  constructor(private http: HttpClient) { }

  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.eventsUrl);  // retourne un Observable contenant un tableau d'événements
  }

  addEvent(event: Event): Observable<Event> {
    return this.http.post<Event>(this.eventsUrl, event);
  }

}
