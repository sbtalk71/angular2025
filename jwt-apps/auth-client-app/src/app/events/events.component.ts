import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Event } from '../event';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit{

  events:Event[]=[];
  constructor(private eventsService:EventService){
    
  }
  ngOnInit(): void {
      this.eventsService.getAllEvents().subscribe(data=>this.events=data);
  }
}
