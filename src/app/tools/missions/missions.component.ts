import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/api.service';

@Component({
  selector: 'app-missions',
  templateUrl: './missions.component.html',
  styleUrls: ['./missions.component.scss']
})
export class MissionsComponent implements OnInit {
  missions;
  constructor(private ds: ApiService) {
    this.ds.sendGetMissions().toPromise().then(data => {
      this.missions = data;
    })
   }

  ngOnInit(): void {
  }

}
