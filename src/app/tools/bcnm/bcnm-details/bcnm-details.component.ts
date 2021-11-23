import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';

@Component({
  selector: 'app-bcnm-details',
  templateUrl: './bcnm-details.component.html',
  styleUrls: ['./bcnm-details.component.scss']
})
export class BcnmDetailsComponent implements OnInit {
  bc;
  id: string;
  constructor(private route: ActivatedRoute, private ds: ApiService) {
    if (route.params) {
      route.params.subscribe(val => {
        this.id = val.id;
        this.ds.sendGetBcnmDets(val.id).toPromise().then((data: any[])=>{
          if(data) {
            this.bc = data;
          }
        });
      });
    }
   }
  ngOnInit(): void {
  }

  getTotalRate(group) {
    var sum = 0;
    for(var i = 0; i < group.BCTreasure.length; i++){
     sum += group.BCTreasure[i].Rate;
    }
    return sum;
  }
}
