import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';

@Component({
  selector: 'app-actor-data',
  templateUrl: './actor-data.component.html',
  styleUrls: ['./actor-data.component.scss']
})
export class ActorDataComponent implements OnInit {
  zoneId: number;
  actorId: number;
  zoneEvents;
    constructor(private route: ActivatedRoute, private ds: ApiService) {
      if (route.params) {
        route.params.subscribe(val => {
          this.zoneId = val.id;
          this.actorId = val.aid;
          this.ds.sendGetZoneActorEvents(this.zoneId, this.actorId).toPromise().then((data: any[])=>{
            this.zoneEvents = data;
          });
        });
      }
     }

  ngOnInit(): void {
  }

}
