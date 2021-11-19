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

  constructor(private route: ActivatedRoute, private ds: ApiService) {
    if (route.params) {
      route.params.subscribe(val => {
        this.zoneId = val.id;
        this.zoneName = val.name;
        this.ds.sendGetZoneEvent(this.zoneId).subscribe((data: any[])=>{
          this.zoneEvents = data;
          this.filteredChars = this.zoneEvents?.acts;
        });
        this.ds.sendGetZoneMobs(this.zoneId).subscribe((data: any[])=>{
          this.zoneMobs = data;
          this.filteredMobs = data;
        });
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

