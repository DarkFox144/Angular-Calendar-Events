import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddEventsComponent} from "./add-events/add-events.component";
import {CalendarComponent} from "./calendar/calendar.component";

const routes: Routes = [
  {path: 'events', component: CalendarComponent},
  {path: 'add', component: AddEventsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
