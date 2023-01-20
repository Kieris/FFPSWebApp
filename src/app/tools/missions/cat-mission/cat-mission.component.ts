import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';

@Component({
  selector: 'app-cat-mission',
  templateUrl: './cat-mission.component.html',
  styleUrls: ['./cat-mission.component.scss']
})
export class CatMissionComponent implements OnInit {
  mission;
  id;
  index;
  constructor(private ds: ApiService, private route: ActivatedRoute) {
    if (route.params) {
      route.params.subscribe(val => {
        this.id = val.id;
        this.index = val.index;
        if(this.id) {
          this.ds.sendGetCatMission(this.id, this.index).toPromise().then(data => {
            this.mission = data;
          })
        }
      });
    }
  }

  ngOnInit(): void {
  }

}
