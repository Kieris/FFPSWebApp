import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../core/api.service';

@Component({
  selector: 'app-crafting-details',
  templateUrl: './crafting-details.component.html',
  styleUrls: ['./crafting-details.component.scss']
})
export class CraftingDetailsComponent implements OnInit {
  searchVal1: number = 1;
  seaItems;
  id: string;

  constructor(private route: ActivatedRoute, private ds: ApiService) {
    if (route.params) {
      route.params.subscribe(val => {
        this.id = val.id;
        this.searchClick();
      });
    }
   }

  ngOnInit(): void {
  }

  searchClick() {
      this.ds.sendGetCraftRecipes(this.id, this.searchVal1, this.searchVal1 + 5).toPromise().then((skill:any) => {
        this.seaItems = skill;
      });
  }

}
