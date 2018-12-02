import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../../services/event/event.service';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.page.html',
  styleUrls: ['./event-create.page.scss'],
})
export class EventCreatePage implements OnInit {

  constructor(private router: Router, private eventService: EventService) { }

  createEvent(
eventName: string,
eventDateObject: any,
eventPrice: number,
eventCost: number
): void {
if (eventDateObject === undefined) {
return;
} else if (
eventDateObject.year === undefined ||
eventDateObject.month === undefined ||
eventDateObject.day === undefined
) {
return;
}
const eventDate: Date = new Date(
eventDateObject.year.value,
eventDateObject.month.value - 1,
eventDateObject.day.value
);
this.eventService
.createEvent(eventName, eventDate, eventPrice, eventCost)
.then(() => {
this.router.navigateByUrl('');
});
}


  ngOnInit() {
  }

}
