import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../core/api.service';

@Component({
  selector: 'app-zone-data',
  templateUrl: './zone-data.component.html',
  styleUrls: ['./zone-data.component.scss']
})
export class ZoneDataComponent implements OnInit {
zoneId: number;
zoneName: string;
zoneEvents;
zoneMobs;
searchCharVal: string;
filteredChars;
searchMobVal: string;
filteredMobs;
mapPaths = ["_nomap.jpg"];
  constructor(private route: ActivatedRoute, private ds: ApiService) {
    if (route.params) {
      route.params.subscribe(val => {
        this.zoneId = val.id;
        this.zoneName = val.name;
        this.ds.sendGetZoneEvent(this.zoneId).toPromise().then((data: any[])=>{
          this.zoneEvents = data;
          this.filteredChars = this.zoneEvents?.acts;
        });
        this.ds.sendGetZoneMobs(this.zoneId).toPromise().then((data: any[])=>{
          this.zoneMobs = data;
          this.filteredMobs = data;
        });
        this.ds.sendGetMapPaths(this.zoneId).toPromise().then((paths : any) => {
          if(paths) {
            this.mapPaths = paths;
          }          
        })
      });
    }
   }

  ngOnInit(): void {
  }

  onSearchTextChange() {
    this.filteredChars = this.zoneEvents?.acts.filter(
      x => x.name.toLowerCase().includes(this.searchCharVal.toLowerCase()));
  }

  onSearchMobTextChange() {
    this.filteredMobs = this.zoneMobs.filter(
      x => x.Name.toLowerCase().includes(this.searchMobVal.toLowerCase()));
  }

}

