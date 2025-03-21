import { Component } from '@angular/core';
import { EventService } from '../event.service';
import { Event } from '../event';

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.css']
})
export class SpecialEventsComponent {
  events:Event[]=[];
  constructor(private eventsService:EventService){
    
  }
  ngOnInit(): void {
      this.eventsService.getAllSpecialEvents().subscribe(data=>this.events=data);
  }
}
