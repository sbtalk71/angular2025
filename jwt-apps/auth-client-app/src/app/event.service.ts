import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
private events_url="http://localhost:3000/api/events";
private special_events_url="http://localhost:3000/api/special";

  constructor(private http:HttpClient) { }

  getAllEvents():Observable<any>{
    return this.http.get(this.events_url);
  }

  getAllSpecialEvents():Observable<any>{
    return this.http.get(this.special_events_url);
  }
}
