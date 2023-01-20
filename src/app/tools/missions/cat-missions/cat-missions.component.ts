import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cat-missions',
  templateUrl: './cat-missions.component.html',
  styleUrls: ['./cat-missions.component.scss']
})
export class CatMissionsComponent implements OnInit {
  missions;
  id;
  constructor(private ds: ApiService, private route: ActivatedRoute) {
    if (route.params) {
      route.params.subscribe(val => {
        this.id = val.id;
        console.log(this.id)
        if(this.id) {
          if(this.id === "assault") {
            this.ds.sendGetAssaults().toPromise().then(data => {
              this.missions = data;
            })
          } else {
            this.ds.sendGetCatMissions(this.id).toPromise().then(data => {
              this.missions = data;
            });
          }
        }
      });
    }
  }
  ngOnInit(): void {
  }

}
