import { formatPercent } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { stringify } from 'querystring';
import { ApiService } from 'src/app/core/api.service';

@Component({
  selector: 'app-mob-details',
  templateUrl: './mob-details.component.html',
  styleUrls: ['./mob-details.component.scss']
})
export class MobDetailsComponent implements OnInit {
  item;
  jobsArr = ["GENKAI", "WAR", "MNK", "WHM", "BLM", "RDM", "THF", "PLD", "DRK", "BST", "BRD", "RNG", "SAM", "NIN", "DRG", "SMN", "BLU", "COR", "PUP", "DNC", "SCH", "GEO", "RUN"];
  fishMob;
  constructor(private route: ActivatedRoute, private ds: ApiService) {
    if (route.params) {
      this.fishMob = null;
      route.params.subscribe(val => {
        this.ds.sendGetMobDet(val.id, val.zid, val.pid).toPromise().then((data: any[])=>{
          if (data && data[0]) {
            this.item = data[0];
            this.ds.sendGetFishMob(this.item.Name, this.item.ZoneId).toPromise().then((mob: any) => {
              this.fishMob = mob;
            });
          }
        });
      });
    }
   }

  ngOnInit(): void {
  }

  getTotalForGroup(rate: number, grp: number, drops) {
      var sum = 0;
      drops.forEach(x => {
        if(x.GroupId == grp) {
          sum += x.ItemRate
        }
      });    
      return rate/sum * 100
  }

}
