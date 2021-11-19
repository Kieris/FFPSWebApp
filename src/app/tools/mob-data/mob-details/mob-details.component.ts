import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';

@Component({
  selector: 'app-mob-details',
  templateUrl: './mob-details.component.html',
  styleUrls: ['./mob-details.component.scss']
})
export class MobDetailsComponent implements OnInit {
  /* 
     // Generate a random level between min and max level
    if (m_maxLevel > m_minLevel)
    {
        level += tpzrand::GetRandomNumber(0, m_maxLevel - m_minLevel + 1);
    }
    */
  item;
  jobsArr = ["GENKAI", "WAR", "MNK", "WHM", "BLM", "RDM", "THF", "PLD", "DRK", "BST", "BRD", "RNG", "SAM", "NIN", "DRG", "SMN", "BLU", "COR", "PUP", "DNC", "SCH", "GEO", "RUN"];
  fishMob;
  constructor(private route: ActivatedRoute, private ds: ApiService) {
    if (route.params) {
      this.fishMob = null;
      route.params.subscribe(val => {
        this.ds.sendGetMobDet(val.id, val.zid, val.pid).subscribe((data: any[])=>{
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

}
