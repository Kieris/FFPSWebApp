import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/api.service';
import { UserService } from '../../core/user.service';

@Component({
  selector: 'app-zones',
  templateUrl: './zones.component.html',
  styleUrls: ['./zones.component.scss']
})
export class ZonesComponent implements OnInit {
  zones = [];
  filteredZones = [];
  searchVal: string;
  constructor(private ds: ApiService, private us: UserService) {
   }

  ngOnInit(): void {
    this.ds.sendGetZones().toPromise().then((data: any[])=>{
      this.zones = data;
      if (this.us.zoneSearch) {
        this.searchVal = this.us.zoneSearch;
        this.onSearchTextChange();
      }
    });
  }

  onSearchTextChange() {
    this.filteredZones = this.zones.filter(
      zone => zone.Name.toLowerCase().includes(this.searchVal.toLowerCase()));
      this.us.zoneSearch = this.searchVal;
  }
}
