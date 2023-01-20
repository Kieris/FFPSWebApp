import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';

@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.scss']
})
export class PetDetailsComponent implements OnInit {
  item;
  jobsArr = ["GENKAI", "WAR", "MNK", "WHM", "BLM", "RDM", "THF", "PLD", "DRK", "BST", "BRD", "RNG", "SAM", "NIN", "DRG", "SMN", "BLU", "COR", "PUP", "DNC", "SCH", "GEO", "RUN"];
  
  constructor(private route: ActivatedRoute, private ds: ApiService) {
    if (route.params) {
      route.params.subscribe(val => {
        this.ds.sendGetPetDet(val.id).toPromise().then((data: any[])=>{
          if (data && data[0]) {
            this.item = data[0];
          }
        });
      });
    }
   }

  ngOnInit(): void {
  }

}
